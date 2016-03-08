<!DOCTYPE html>
<html lang="br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Portal RH</title>
        <!-- Bootstrap -->
        <link href="plugins/bootstrap_twitter3/css/bootstrap.min.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>
        <?php
        require_once 'Modules/Default/View/soma/soma.php';
//require_once 'Modules/Default/';
        ?> 

        <?php
//require_once 'Modules/Layout/layout.php';
//Declarar uma variável
        $nome = "Luiz Bouth";
        $login = "Luiz Bouth";
        $matricula = 94158;
        $mat_2 = 94158;
        $status = TRUE;
//IF - Comparar string
        if (!strcmp($nome, $login)) { //strcmp serv para comprar duas strings // o ponto de ! server como negação fazendo o strcmp tornar-se true
            echo 'teste ok';
        } else {
            echo 'Erro strings';
        }
        echo '<p></p>';
//IF - Comparar números
        if ($matricula === $mat_2) { //Diferente != - igual ===
            echo 'Número ok';
        } else {
            echo 'Erro';
        }
        echo '<p></p>';

//Declarar um array
        $arr01 = array();
        $arr02 = array("uva", "pêra", 0, true, 1);
        $arr03 = array("uva" => 10, "pêra" => 11, "maçã" => 3.50, "limão" => 4.30, "goiaba" => 1);
        //var_dump($arr02);
        echo '<p></p>';
        for ($index = 0; $index < count($arr02); $index++) {
            echo $arr02 [$index] . " ";
        }

        echo '<p></p>';

        foreach ($arr03 as $key => $value) {
            echo $key . " ";
            echo $value . " ";
        }
        //while
        $iconta = 0;
        while ($status === TRUE) {
            $iconta = $iconta + 1;
            if ($iconta === 10) {
                //faz echo 1
                echo 'bouth';
                break;
                //$status = false;
            }
        }
        ?> 

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="plugins/bootstrap_twitter3/js/bootstrap.min.js"></script>    
    </body>
</html>


