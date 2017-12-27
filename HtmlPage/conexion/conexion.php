<?php

	$db_host="ceipekelandia.com";
	$db_user="ceipeke2_root";
	$db_password="123456";
	$db_name="ceipeke2_espectador";
	$db_connection = mysql_connect($db_host, $db_user, $db_password);
    mysql_query("SET NAMES UTF8");
    if(!$db_connection){
        die("imposible conectarse: ".mysqli_error($db_connection));
    }
    if (@mysqli_connect_errno()) {
        die("Conexión falló: ".mysqli_connect_errno()." : ". mysqli_connect_error());
    }
?>