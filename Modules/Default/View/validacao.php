<?php
require_once '../../Model/DaoHolerite.php';
var_dump($_POST);

echo $_POST ["ipt_matricula"];

$dadosusr = new DaoHolerite();

$lg_usr = $dadosusr->getLoginFunc();
echo $lg_usr;

$x = $dadosusr->getDadosFunc();
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

