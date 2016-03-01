<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */echo 'teste';
require_once '../../Model/DaoHolerite.php';

$x = new DaoHolerite();
$id = "luiz.bouth";

echo $x->getNomeFunc($id);
echo 'teste2';