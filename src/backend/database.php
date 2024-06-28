<?php

function bbdd(){
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'svelte';

    return new mysqli($host,$user,$password,$db);
}


function bbddConnect(){
    $host = 'localhost';
    $user = 'root';
    $password = '';

    return bbdd()->connect($host,$user,$password);
}