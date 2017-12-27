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
			
		//---------------Select comprobar si el usuario ya esta registrado


				   $insertar_valores = "INSERT INTO `padres`(`CI_PADRE`, `ID_TIPO`, `NOMBRE`, `LUGAR_TRABAJO`, `DIRECCION_TRABAJO`, `TEL_PADRE`, `EMAIL`, `DIRECCION_DOMICILIO`, `TIPO_VIVIENDA`, `TEL_AUX`) VALUES ('$cedulapa','$id_tipopa','$nombrepa','$lugartrapa','$direccion_trapa','$telefonopa','$emailpa','$domiciliopa','$tipo_vipa','$teauxpa')";

				   $insertar_valores1 = "INSERT INTO `padres`(`CI_PADRE`, `ID_TIPO`, `NOMBRE`, `LUGAR_TRABAJO`, `DIRECCION_TRABAJO`, `TEL_PADRE`, `EMAIL`, `DIRECCION_DOMICILIO`, `TIPO_VIVIENDA`, `TEL_AUX`) VALUES ('$cedulama','$id_tipoma','$nombrema','$lugartrama','$direccion_trama','$telefonoma','$emailma','$domicilioma','$tipo_vima','$teauxma')";


				mysql_select_db($db_name, $db_connection);
				$retry_value = mysql_query($insertar_valores, $db_connection);
				$retry_value1 = mysql_query($insertar_valores1, $db_connection);
					if (($retry_value)&&($retry_value1)) {

						$insertar_val="INSERT INTO `estu_padres`(`CEDULA`, `CI_PADRE`) VALUES ('$cedula_estu','$cedulapa')";
						$insertar_val1="INSERT INTO `estu_padres`(`CEDULA`, `CI_PADRE`) VALUES ('$cedula_estu','$cedulama')";
							$retry_val = mysql_query($insertar_val, $db_connection);
							$retry_val1 = mysql_query($insertar_val1, $db_connection);
							if (($retry_val)&&($retry_val1))
							{

								echo "true";
							}

					
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