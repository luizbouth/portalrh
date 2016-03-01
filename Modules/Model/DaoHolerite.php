<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DaoHolerite
 *
 * @author fernando.reis
 */
require_once 'Database.php';

class DaoHolerite {

    public function getLoginFunc() {
        $connection = new database();

        if ($connection->getConnection()) {
            $pdo = $connection->getConnection();

            //$where = " WHERE lg_usr = " . $lg_usr . ";";
            $query = "SELECT * FROM tb_usr_adm";

            //$query = $query . $where;
            //$query = $query;

            $consulta = $pdo->query($query);

            $linha = $consulta->fetch(PDO::FETCH_ASSOC);
            var_dump($linha);
            echo '<br/>';
            $connection = null;

            return $linha["lg_usr"];
        } else {
            return 'Erro em Viagem.php: Falha na conexão.';
        }
    }

    public function getDadosFunc() {
        $connection = new database();

        if ($connection->getConnection()) {
            $pdo = $connection->getConnection();

            $sth = $pdo->prepare("SELECT * FROM tb_usr_adm");
            $sth->execute();

            /* Fetch all of the remaining rows in the result set */
            print("Fetch all of the remaining rows in the result set:\n");
            $result = $sth->fetchAll();
            print_r($result);            
            return $result;
        } else {
            return 'Erro em Viagem.php: Falha na conexão.';
        }
    }

}
