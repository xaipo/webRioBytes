<?php

//Conexion con la base de datos

require_once ("../conexion/conexion.php");
$db_table_name="jornada";


 if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}

   //utf8_decode
//--------Datos Obtenidos desde el ajax el ajax de code.js

	$id_jornada = $_GET['id_jornada'];
	
//---------------Select comprobar si el usuario ya esta registrado

	$sql= "SELECT * FROM `jornada` WHERE `ID_JORNADA` = '$id_jornada'";
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