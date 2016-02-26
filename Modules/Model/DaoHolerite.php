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
    
    public function getNomeFunc($id) {
        $connection = new database();

        if ($connection->getConnection()) {
            $pdo = $connection->getConnection();

            $where = " WHERE id = " . $id . ";";
            $query = "SELECT nome FROM tb_log";
            
            $query = $query . $where;

            $consulta = $pdo->query($query);

            $linha = $consulta->fetch(PDO::FETCH_ASSOC);
            
            $connection = null;
            
            return $linha["nome"];
        } else {
            return 'Erro em Viagem.php: Falha na conexão.';
        }
    }
    
}
