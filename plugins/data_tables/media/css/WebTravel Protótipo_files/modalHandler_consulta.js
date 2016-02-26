

$(document).ready(function () {

    function replaceAll(string, token, newtoken) {
        while (string.indexOf(token) !== -1) {
            string = string.replace(token, newtoken);
        }
        return string;
    }

    function getTotal(recipient) {
        var soma = 0;
        for (var i = 1; i <= recipient; i++) {
            var aux = $('.bodyTable tr#' + (i) + ' td').text().split('R$ ');

            //converte , para . para que o parseFloat transforme a string 
            //corretamente
            if ((typeof aux[1]) === 'undefined') {
                aux[1] = 0;
            } else {
                aux[1] = replaceAll(aux[1], ".", "");
                aux[1] = aux[1].replace(",", ".");
            }

            soma += parseFloat(aux[1]);
        }

        return soma;
    }

    //método para colocar a data no seguinte formato: AA-MM-DD
    function formatDataToForm(dataAux) {
        var auxData = dataAux.split('/');

        return auxData[2] + '-' + auxData[1] + '-' + auxData[0];
    }

    function formatDataToTable(dataAux) {
        var auxData = dataAux.split('-');

        return auxData[2] + '\/' + auxData[1] + '\/' + auxData[0];
    }

    //converte string para moeda
    function getMoney(moeda)
    {
        moeda = moeda.replace("R$ ", "");
        moeda = moeda.replace(".", "");
        moeda = moeda.replace(",", ".");

        return parseFloat(moeda);
    }

    //converte moeda para string
    function formatReal(mixed) {

        var int = parseInt(mixed.toFixed(2).toString().replace(/[^\d]+/g, ''));
        var tmp = int + '';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6)
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }

    //--------------------------------------------------------------------------
    //----- Adicionar novos custos ---------------------------------------------
    //--------------------------------------------------------------------------
    $('#addJustModal').on('show.bs.modal', function () {

        //obtém o id que será usado para o novo elemento
        var recipient = parseInt($("#tab_gastos_consult_reject #bodyGasto tr:last-child").attr('id')) + 1;

        //caso a tabela esteja vazia
        recipient = isNaN(recipient) ? 1 : recipient;

        var modal = $(this);

        modal.find('.modal-footer #addJustSubmit').off('click').on("click", function () {

            //obtém a cor da linha alterada na tabela
            var lineclass = $('.bodyTable tr#' + (recipient - 1) + ' td').attr('class');

            //decide qual cor a nova linha terá
            switch (lineclass) {
                case 'warning':
                    lineclass = 'success';
                    break;
                case 'success':
                    lineclass = 'info';
                    break;
                case 'info':
                    lineclass = '';
                    break;
                default:
                    lineclass = 'warning';
                    break;
            }

            var auxDados = {};

            var dataAtual = new Date();

            auxDados["id"] = recipient;
            auxDados["data"] = formatDataToTable(dataAtual.getFullYear() + "-" + dataAtual.getMonth() + "-" + dataAtual.getDate());
            auxDados["justificativa"] = modal.find('.modal-body #ta_just').val();

            //formata os dados para aparecerem corretamente na tabela
            $stringAux = "";
            $stringAux = '<td>' + recipient + '</td>';
            $stringAux += '<td>' + auxDados["data"] + '</td>';
            $stringAux += '<td>' + auxDados["justificativa"] + '</td>';

            var tempOpenDiv = "<div class='btn-group' role='group' aria-label='...'>";
            var tempEditButton = "<a href='#' id='EditarButton' class='btn btn-link btn-sm left-margin' data-toggle='modal' data-target='#editarJustModal' data-title='" + JSON.stringify(auxDados) + "'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span></a>";
            var tempDeleteButton = "<a id='DeletarButton' delete-id='" + recipient['id'] + "' class='btn btn-link btn-sm delete-object' data-toggle='modal' data-target='#deletarJustModal' data-title='" + JSON.stringify(auxDados) + "'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>";
            var tempCloseDiv = "</div>";

            $stringAux += '<td>' + tempOpenDiv + tempEditButton + tempDeleteButton + tempCloseDiv + '</td>';
            $stringAux = '<tr id="' + (recipient) + '">' + $stringAux + '</tr>';

            var resultMerge = new Array();
            var auxMerge = [];

            //teste para evitar erros na inserção de dados quando a tabela está vazia
            if (typeof $('.bodyTable tr#' + (recipient - 1)).attr('id') === 'undefined') {
                for (var prop in auxDados) {
                    auxMerge.push(auxDados[prop]);
                    if (prop === 'valor') {
                        resultMerge.push(auxMerge);
                        auxMerge = [];
                    }
                }

                $('.bodyTable').html('<tr id="' + (recipient - 1) + '">' + $stringAux + '</tr>');                
            } else {
                //define os valores que serão inseridos na linha da tabela
                $('.bodyTable tr#' + (recipient - 1)).after($stringAux);
            }

            //define a cor da linha na tabela
            $('.bodyTable tr#' + (recipient) + ' td').attr('class', lineclass);

            //obtém o valor total gasto
            var stringTotal = '<p id="contextual" class="bg-danger"><strong>Total: ' + 'R$ ' + formatReal(getTotal(recipient)) + '</strong></p>';
            $('#resultado').html(stringTotal);
        });

    });

    //--------------------------------------------------------------------------
    //----- Editar custo -------------------------------------------------------
    //--------------------------------------------------------------------------
    $('#editarJustModal').on('show.bs.modal', function (event) {

        var button = $(event.relatedTarget);

        var recipient = button.data('title');

        var modal = $(this);
        //alert(recipient);
        //Monta o título do modal
        modal.find('.modal-title').html('<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Editar item de ID: ' + recipient["id"]);
        modal.find('.modal-body #ta_just').val(recipient["justificativa"]);

        modal.find('.modal-footer #editarJustSubmit').off('click').on("click", function () {

            //obtém a cor da linha alterada na tabela
            var lineclass = $('.bodyTable tr#' + recipient["id"] + ' td').attr('class');
            var dataAtual = new Date();
            recipient["data"] = formatDataToTable(dataAtual.getFullYear() + "-" + dataAtual.getMonth() + "-" + dataAtual.getDate());
            recipient["justificativa"] = modal.find('.modal-body #ta_just').val();

            //formata os dados para aparecerem corretamente na tabela
            $stringAux = "";
            $stringAux = '<td>' + recipient["id"] + '</td>';
            $stringAux += '<td>' + recipient["data"] + '</td>';
            $stringAux += '<td>' + recipient["justificativa"] + '</td>';

            var tempOpenDiv = "<div class='btn-group' role='group' aria-label='...'>";
            var tempEditButton = "<a href='#' id='EditarButton' class='btn btn-link btn-sm left-margin' data-toggle='modal' data-target='#editarJustModal' data-title='" + JSON.stringify(recipient) + "'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span></a>";
            var tempDeleteButton = "<a id='DeletarButton' delete-id='" + recipient['id'] + "' class='btn btn-link btn-sm delete-object' data-toggle='modal' data-target='#deletarJustModal' data-title='" + JSON.stringify(recipient) + "'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>";
            var tempCloseDiv = "</div>";

            $stringAux += '<td>' + tempOpenDiv + tempEditButton + tempDeleteButton + tempCloseDiv + '</td>';

            //define os valores que serão inseridos na linha da tabela
            $('.bodyTable tr#' + recipient["id"]).html($stringAux);

            //define a cor da linha na tabela
            $('.bodyTable tr#' + recipient["id"] + ' td').attr('class', lineclass);

            //cálculo do valor total gasto
            var lastId = parseInt($("#tab_gastos_consult_reject #bodyGasto tr:last-child").attr('id'));

            var stringTotal = '<p id="contextual" class="bg-danger"><strong>Total: ' + 'R$ ' + formatReal(getTotal(lastId)) + '</strong></p>';
            $('#resultado').html(stringTotal);
        });

    });

    //--------------------------------------------------------------------------
    //----- Deletar custo ------------------------------------------------------
    //--------------------------------------------------------------------------
    function deleteRow(rowid)
    {
        var row = document.getElementById(rowid);
        row.parentNode.removeChild(row);
    }

    $('#deletarJustModal').on('show.bs.modal', function (event) {

        var button = $(event.relatedTarget);
        var recipient = button.data('title');

        var modal = $(this);

        modal.find('.modal-title').html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Deletar item de ID: ' + recipient["id"]);


        modal.find('.modal-footer #deletarSubmit').off('click').on("click", function () {
            deleteRow(recipient["id"]);

            //cálculo do valor total gasto
            var lastId = parseInt($("#tab_gastos_consult_reject #bodyGasto tr:last-child").attr('id'));

            var stringTotal = '<p id="contextual" class="bg-danger"><strong>Total: ' + 'R$ ' + formatReal(getTotal(lastId)) + '</strong></p>';
            $('#resultado').html(stringTotal);
        });
    });

    //--------------------------------------------------------------------------

    function getItensFromTable(tableName) {
        var table = document.getElementById(tableName),
                rows = table.getElementsByTagName('tr'),
                i, j, cells;
        var arrayElements = new Array();

        var cont = 0;
        
        for (i = 0, j = rows.length; i < j; ++i) {
            cells = rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            
            var auxObj = new Object();
            for (l = 0; l < cells.length - 1; l++) {
                
                if (typeof cells[l].innerHTML !== 'undefined') {
                    switch (l) {
                        case 0:
                            var auxStr = cells[l].innerHTML.replace(/(\r\n|\n|\r|\s+)/gm,"");                            
                            auxObj["id"] = auxStr;                            
                            break;
                        case 1:
                            auxObj["data"] = cells[l].innerHTML;                            
                            break;
                        case 2:
                            auxObj["justificativa"] = cells[l].innerHTML;                            
                            break;
                    }                    
                }
            }
            
            arrayElements[cont++] = auxObj;
        }
        
        return arrayElements;
    }

    $('#fm_consulta_viag').on('submit', function () {        
        $('#dados_tabela').attr('value', JSON.stringify(getItensFromTable('tab_gastos_consult_reject')));
    });

});



