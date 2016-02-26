//método para disparar o evento ajax
function dispatchAjax(url) {
    //----------------------------------------------------------------------
    //Método síncrono de obter os dados do PHP. Dados Gerais;
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        async: false,
        url: url
    });

    request.done(function (msg) {
        top.dados = msg;
    });
}

//Renderiza as tabelas das interfaces
function renderInterface(paths, target) {
    top.dados1 = "";
    top.dados2 = "";
    top.dados3 = "";
    top.dados4 = "";
    top.dados5 = "";
    top.dados6 = "";
    top.dados7 = "";

    var baseurl = "/webteste/Modules/Basic/Controller/";
    var baseurl2 = "/webteste/Modules/";

    var url1 = baseurl.concat(paths[1]); //tab1
    var url2 = baseurl.concat(paths[2]); //tab2
    var url3 = baseurl.concat(paths[0]); //dados gerais          

    var url4 = baseurl.concat(paths[4]); //cc
    var url5 = baseurl.concat(paths[5]); //motivos
    var url6 = baseurl.concat(paths[6]); //lotacao

    var url7 = baseurl2.concat(paths[3]); //interface

    //Obtém as informações para completar o formulário de prestação de contas
    dispatchAjax(url1);
    top.dados1 = top.dados;
    dispatchAjax(url2);
    top.dados2 = top.dados;
    dispatchAjax(url3);
    top.dados3 = top.dados;
    dispatchAjax(url4);
    top.dados4 = top.dados;
    dispatchAjax(url5);
    top.dados5 = top.dados;
    dispatchAjax(url6);
    top.dados6 = top.dados;

    //----------------------------------------------------------------------             
    //Enviando dados ao PHP via post.
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        url: url7,
        data: {dados1: top.dados1, dados2: top.dados2, dados3: top.dados3, dados4: top.dados4, dados5: top.dados5, dados6: top.dados6}
    });

    request.done(function (msg) {
        $(target).hide();
        $(target).html(msg);
        $(target).show('slow');
    });
}

//Renderiza as tabelas das interfaces
function renderInterface_pre_viagem(paths, target) {
    top.dados1 = "";
    top.dados2 = "";
    top.dados3 = "";
    top.dados4 = "";
    
    var baseurl = "/webteste/Modules/Basic/Controller/";
    var baseurl2 = "/webteste/Modules/";

    var url1 = baseurl.concat(paths[1]); //tab1 -> dados Adiant
    var url2 = baseurl.concat(paths[2]); //tab2 -> Rejeicao
    var url3 = baseurl.concat(paths[0]); //dados gerais          

    var url4 = baseurl2.concat(paths[3]); //interface

    //Obtém as informações para completar o formulário de prestação de contas
    //Dados Adiant
    dispatchAjax(url1);
    top.dados1 = top.dados;
    
    //Dados Rejeicao
    dispatchAjax(url2);
    top.dados2 = top.dados;
    
    //Dados Gerais
    dispatchAjax(url3);
    top.dados3 = top.dados;
    
    //----------------------------------------------------------------------             
    //Enviando dados ao PHP via post.
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        url: url4,
        data: {dados1: top.dados1, dados2: top.dados2, dados3: top.dados3}
    });

    request.done(function (msg) {
        $(target).hide();
        $(target).html(msg);
        $(target).show('slow');
    });
}

//Renderiza as tabelas das interfaces
function renderInterface_pos_viagem(paths, target) {
    top.dados1 = "";
    top.dados2 = "";
    top.dados3 = "";
    top.dados4 = "";
    top.dados5 = "";
    top.dados6 = "";
    
    var baseurl = "/webteste/Modules/Basic/Controller/";
    var baseurl2 = "/webteste/Modules/";

    var url1 = baseurl.concat(paths[0]); //tab1 -> dados gerais    
    var url2 = baseurl.concat(paths[1]); //tab2 -> dados adiant    
    var url3 = baseurl.concat(paths[2]); //tab3 -> dados gasto    
    var url4 = baseurl.concat(paths[3]); //dados rejeicao    
    var url5 = baseurl.concat(paths[4]); //cc    
    var url6 = baseurl.concat(paths[5]); //motivos
    var url7 = baseurl2.concat(paths[6]); //interface
    //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=    
    //Obtém as informações para completar o formulário de prestação de contas
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=    
   
    //Dados Gerais
    dispatchAjax(url1);
    top.dados1 = top.dados;
    
    //Dados Adiant
    dispatchAjax(url2);
    top.dados2 = top.dados;
    
    //Dados Gasto
    dispatchAjax(url3);
    top.dados3 = top.dados;
    
    //Dados Rejeicao
    dispatchAjax(url4);
    top.dados4 = top.dados;
    
    //CC    
    dispatchAjax(url5);
    top.dados5 = top.dados;
    
    //Motivos
    dispatchAjax(url6);
    top.dados6 = top.dados;
    
    //----------------------------------------------------------------------             
    //Enviando dados ao PHP via post.
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        url: url7,
        data: {dados1: top.dados1, dados2: top.dados2, dados3: top.dados3, dados4: top.dados4, dados5: top.dados5, dados6: top.dados6}
    });

    request.done(function (msg) {
        $(target).hide();
        $(target).html(msg);
        $(target).show('slow');
    });
}

//Renderiza as tabelas das interfaces
function renderInterface_pos_viagem_consulta(paths, target) {
    top.dados1 = "";
    top.dados2 = "";
    top.dados3 = "";
    top.dados4 = "";
    top.dados5 = "";
    top.dados6 = "";
    
    var baseurl = "/webteste/Modules/Basic/Controller/";
    var baseurl2 = "/webteste/Modules/";

    var url1 = baseurl.concat(paths[0]); //tab1 -> dados gerais    
    var url2 = baseurl.concat(paths[1]); //tab2 -> dados adiant    
    var url3 = baseurl.concat(paths[2]); //tab3 -> dados gasto    
    var url4 = baseurl.concat(paths[3]); //dados rejeicao
    var url5 = baseurl2.concat(paths[4]); //interface
    //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=    
    //Obtém as informações para completar o formulário de prestação de contas
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=    
   
    //Dados Gerais
    dispatchAjax(url1);
    top.dados1 = top.dados;
    
    //Dados Adiant
    dispatchAjax(url2);
    top.dados2 = top.dados;
    
    //Dados Gasto
    dispatchAjax(url3);
    top.dados3 = top.dados;
    
    //Dados Rejeicao
    dispatchAjax(url4);
    top.dados4 = top.dados;
    
    //----------------------------------------------------------------------             
    //Enviando dados ao PHP via post.
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        url: url5,
        data: {dados1: top.dados1, dados2: top.dados2, dados3: top.dados3, dados4: top.dados4}
    });

    request.done(function (msg) {
        $(target).hide();
        $(target).html(msg);
        $(target).show('slow');
    });
}

//Renderiza as tabelas das interfaces
function renderInterface_consulta(paths, target) {
    top.dados1 = "";
    top.dados2 = "";
    
    var baseurl = "/webteste/Modules/Basic/Controller/";
    var baseurl2 = "/webteste/Modules/";

    var url1 = baseurl.concat(paths[1]); //pendencias

    var url2 = baseurl2.concat(paths[0]); //interface

    //Obtém as informações para completar o formulário de prestação de contas
    dispatchAjax(url1);
    top.dados1 = top.dados;
    
    //----------------------------------------------------------------------             
    //Enviando dados ao PHP via post.
    //----------------------------------------------------------------------
    var request = $.ajax({
        method: "POST",
        url: url2,
        data: {dados1: top.dados1}
    });

    request.done(function (msg) {
        $(target).hide();
        $(target).html(msg);
        $(target).show('slow');
    });
}