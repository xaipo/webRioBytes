<?php

//Conexion con la base de datos

require_once ("../conexion/conexion.php");
$db_table_name="matricula";


 if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}

   //utf8_decode
//--------Datos Obtenidos desde el ajax el ajax de code.js

	$cedula = $_GET['cedula'];
	$id_periodo = $_GET['id_periodo'];
	
//---------------Select comprobar si el usuario ya esta registrado

	$sql= "SELECT * FROM `matricula` inner join `nivel` on matricula.ID_NIVEL = nivel.ID_NIVEL where matricula.`CEDULA` = '$cedula' and matricula.`ID_PERIODO`= '$id_periodo'";

	
	mysql_select_db($db_name, $db_connection);
	$result = mysql_query($sql, $db_connection);
	
	$resp = json_encode($result);
	if($resp == "false")
	{
		echo "false";
	}else
	{
		$num = mysql_num_rows($result);
		$arr = array();
		if ($num >= 0 )
		{
			
			$row = mysql_fetch_assoc($result);
			


		}
		echo $json_response = json_encode($row);

	}

	

# JSON-encode the response
	
    mysql_close($db_connection);





?>