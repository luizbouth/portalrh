/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    //Mais informações vide prestContas.js
    $("#cad_viagem").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "CadastroViagem/cad_cc.php";
        pathMotivos = "CadastroViagem/cad_motivos.php";
        pathLotacao = "CadastroViagem/cad_lotacao.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "CadastroViagem/cad_dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "CadastroViagem/cad_dadosAdiant.php";
        pathTab2 = "CadastroViagem/cad_dadosGasto.php";
        pathInterface = "Basic/view/cad_viagem/form_cadastroViagem.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface(paths, target);
    });

    //Mais informações vide prestContas.js
    $("#cad_viagem_pesq").click(function (evt) {
        evt.preventDefault();
        
        //dados dos selects
        pathCc = "CadastroViagem/cad_cc.php";
        pathMotivos = "CadastroViagem/cad_motivos.php";
        pathLotacao = "CadastroViagem/cad_lotacao.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "CadastroViagem/cad_dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "CadastroViagem/cad_dadosAdiant.php";
        pathTab2 = "CadastroViagem/cad_dadosGasto.php";
        pathInterface = "Basic/view/cad_viagem_com_pesquisa/form_cadastroViagem.php";
        
        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface(paths, target);        
    });
    
    //Mais informações vide prestContas.js
    $("#aprov_pre_viagem").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "AprovPreViagem/pre_cc.php";
        pathMotivos = "AprovPreViagem/pre_motivos.php";
        pathLotacao = "AprovPreViagem/pre_lotacao.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "AprovPreViagem/pre_dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "AprovPreViagem/pre_dadosAdiant.php";
        pathTab2 = "AprovPreViagem/pre_dadosRejeicao.php";
        pathInterface = "Basic/view/aprov_pre_viagem/form_aprov_pre_viagem.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface_pre_viagem(paths, target);
    });

    //Mais informações vide prestContas.js
    $("#prest_cont_card").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "PrestacaoCartao/cc.php";
        pathMotivos = "PrestacaoCartao/motivos.php";
        pathLotacao = "PrestacaoCartao/observacoes.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "PrestacaoCartao/dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "PrestacaoCartao/dadosAdiant.php";
        pathTab2 = "PrestacaoCartao/dadosGasto.php";
        pathInterface = "Basic/view/prest_cartao/procSolicitante.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface(paths, target);
    });
    
    //Mais informações vide prestContas.js
    $("#prest_cont_card_pesq").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "PrestacaoCartao/cc.php";
        pathMotivos = "PrestacaoCartao/motivos.php";
        pathLotacao = "PrestacaoCartao/observacoes.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "PrestacaoCartao/dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "PrestacaoCartao/dadosAdiant.php";
        pathTab2 = "PrestacaoCartao/dadosGasto.php";
        pathInterface = "Basic/view/prest_cartao_com_pesquisa/procSolicitante.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface(paths, target);
    });

    //Mais informações vide prestContas.js
    $("#aprov_pos_viagem").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "AprovPosViagem/pos_cc.php";
        pathMotivos = "AprovPosViagem/pos_motivos.php";
        pathLotacao = "AprovPosViagem/pos_lotacao.php";
        pathPendencias = "AprovPosViagem/pos_pendencias.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "AprovPosViagem/pos_dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "AprovPosViagem/pos_dadosAdiant.php";
        pathTab2 = "AprovPosViagem/pos_dadosGasto.php";
        pathTab3 = "AprovPosViagem/pos_rejeicao.php";
        pathInterface = "Basic/view/aprov_pos_viagem/form_aprov_pos_viagem.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao, pathTab3, pathPendencias];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface_pos_viagem(paths, target);
    });
    
    //Mais informações vide prestContas.js
    $("#consulta").click(function (evt) {
        evt.preventDefault();

        //dados dos selects
        pathCc = "Consulta/con_cc.php";
        pathMotivos = "Consulta/con_motivos.php";
        pathLotacao = "Consulta/con_lotacao.php";
        pathPendencias = "Consulta/con_pendencias.php";

        //caminho onde se encontra os dados do solicitante
        pathDadosGerais = "Consulta/con_dadosGerais.php";

        //caminhos onde ser encontrar os arquivos que renderizam a interface das tabelas
        pathTab1 = "Consulta/con_dadosAdiant.php";
        pathTab2 = "Consulta/con_dadosGasto.php";
        pathTab3 = "Consulta/con_rejeicao.php";
        pathInterface = "Basic/view/consulta/form_consulta.php";

        //div onde a interface vai ser renderizada
        target = "#div_content";

        var paths = [pathDadosGerais, pathTab1, pathTab2, pathInterface, pathCc, pathMotivos, pathLotacao, pathTab3, pathPendencias];

        //métodos que contrói e manipula os dados na interface gráfica
        renderInterface_consulta(paths, target);
    });

    //renderiza a área de login do sistema
    $('#loginModal').modal({
        backdrop: false,
        keyboard: false,
        show: true
    });
});

