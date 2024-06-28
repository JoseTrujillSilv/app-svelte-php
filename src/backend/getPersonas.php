<?php

header('Access-Control-Allow-Origin: *'); // Permite el acceso desde cualquier origen
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Especifica los métodos HTTP permitidos
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Especifica los encabezados HTTP permitidos


require_once './database.php';


$query = bbdd()->query("SELECT * FROM  personas");
$arrayJson = [];


for ($i=0; $i < $query->num_rows; $i++) { 
    $row = mysqli_fetch_array($query,MYSQLI_ASSOC);
    $arrayJson[] = $row;
}

echo json_encode($arrayJson);
