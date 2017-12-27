<?php

//$recaptcha = $_GET['recaptcha'];

//if ($recaptcha != '')
//{
	//$secret ="6LfSCyAUAAAAAMR63jFsO3eChALGhTkrehYrrxQg"; 
	//$secret ="6LfoTCAUAAAAAI6saADj8159hIYhsNooBDzacP2O"; //local
	//$ip = $_SERVER['REMOTE_ADDR'];
	//$var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
	//$array = json_decode($var, true);
	//if($array['success']) 
	//{

		//Conexion con la base de datos

		require_once ("../conexion/conexion.php");
		$db_table_name="padres";
	

		 if (!$db_connection) {
			die('No se ha podido conectar a la base de datos');
		}

		   //utf8_decode
		//--------Datos Obtenidos desde el ajax el ajax de code.js

				$cedulapa = $_GET['cedulapa'];
				$nombrepa = $_GET['nombrepa'];
				$lugartrapa = $_GET['lugartrapa'];
				$direccion_trapa= $_GET['direccion_trapa'];  
				$telefonopa = $_GET['telefonopa'];
				$emailpa = $_GET['emailpa'];
				$domiciliopa = $_GET['domiciliopa'];
				$tipo_vipa = $_GET['tipo_vipa'];
				$teauxpa = $_GET['teauxpa'];
				$id_tipopa = $_GET['id_tipopa'];
				
				$cedulama = $_GET['cedulama'];
				$nombrema = $_GET['nombrema'];
				$lugartrama = $_GET['lugartrama'];
				$direccion_trama= $_GET['direccion_trama'];
				$telefonoma = $_GET['telefonoma'];
				$emailma = $_GET['emailma'];
				$domicilioma = $_GET['domicilioma'];
				$tipo_vima = $_GET['tipo_vima'];
				$teauxma = $_GET['teauxma'];
				$id_tipoma = $_GET['id_tipoma'];

				$cedula_estu = $_GET['cedula_estu'];

				//echo "dentro de php";
			
		//---------------Select comprobar si el usuario ya esta registrado


				   $insertar_valores = "UPDATE `padres` SET `NOMBRE`='$nombrepa',`LUGAR_TRABAJO`='$lugartrapa',`DIRECCION_TRABAJO`='$direccion_trapa',`TEL_PADRE`='$telefonopa',`EMAIL`='$emailpa',`DIRECCION_DOMICILIO`='$domiciliopa',`TIPO_VIVIENDA`='$tipo_vipa',`TEL_AUX`='$teauxpa' WHERE `CI_PADRE`='$cedulapa'";





				   $insertar_valores1 = "UPDATE `padres` SET `NOMBRE`='$nombrema',`LUGAR_TRABAJO`='$lugartrama',`DIRECCION_TRABAJO`='$direccion_trama',`TEL_PADRE`='$telefonoma',`EMAIL`='$emailma',`DIRECCION_DOMICILIO`='$domicilioma',`TIPO_VIVIENDA`='$tipo_vima',`TEL_AUX`='$teauxma' WHERE `CI_PADRE`='$cedulama'";


				mysql_select_db($db_name, $db_connection);
				$retry_value = mysql_query($insertar_valores, $db_connection);
				//echo json_encode($retry_value);
				$retry_value1 = mysql_query($insertar_valores1, $db_connection);
				//echo json_encode($retry_value1);
					if (($retry_value)&&($retry_value1)) {

						echo"true";
						
				  	  //lo que se envia de respuesta al ajax de javascript
				   
					}else 
					{
						echo "error"; //lo que se envia de respuesta al ajax de javascript
					}

		mysql_close($db_connection);


	//}else
	//{
	//	echo "false";
	//}

//}else
//{
//	echo "llene los campos";
//}





?>