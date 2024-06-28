<?php

require_once './database.php';

$nombre = $_GET['name'];
$lastName = $_GET['last_name'];
$edad = $_GET['edad'];
$dni = random_int(999,9999999);

if ($nombre==''|$lastName==''|$edad=='') {
    header('Location: http://localhost:5173');
}else{
    $query = bbdd()->query("INSERT INTO personas VALUES($dni,'$nombre','$lastName',$edad)");

    header('Location: http://localhost:5173/#/statusOk');
}