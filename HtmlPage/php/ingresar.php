<?php

/*$recaptcha = $_GET['recaptcha'];

if ($recaptcha != '')
{
	//$secret ="6LfSCyAUAAAAAMR63jFsO3eChALGhTkrehYrrxQg"; 
	$secret ="6LfoTCAUAAAAAI6saADj8159hIYhsNooBDzacP2O"; //local
	$ip = $_SERVER['REMOTE_ADDR'];
	$var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
	$array = json_decode($var, true);
	if($array['success']) 
	{*/

		//Conexion con la base de datos

		require_once ("../conexion/conexion.php");
		$db_table_name="estudiantes";
	

		 if (!$db_connection) {
			die('No se ha podido conectar a la base de datos');
		}

		   //utf8_decode
		//--------Datos Obtenidos desde el ajax el ajax de code.js

			$cedula = $_GET['cedula'];
			$nombre = $_GET['nombre'];
			$fecha_naci = $_GET['fecha_naci'];
			$anios = $_GET['anios'];
			$meses = $_GET['meses'];
			$sexo = $_GET['sexo'];
			$talla = $_GET['talla'];
			$peso = $_GET['peso'];
			$torax = $_GET['torax'];
			$id_jornada = $_GET['id_jornada'];
			$id_refrigerio = $_GET['id_refrigerio'];
			$id_nivel = $_GET['nivel'];
			$alimentos_excluidos = $_GET['alimentos_excluidos'];
			$problemas_salud = $_GET['problemas_salud'];
			$alergias = $_GET['alergias'];
			$medicacion = $_GET['medicacion'];
			$pediatra = $_GET['pediatra'];
			$tel_pediatra = $_GET['tel_pediatra'];
			$perso_recibir_ninios = $_GET['perso_recibir_ninios'];
			$tel_emergencia = $_GET['tel_emergencia'];
			$observaciones = $_GET['observaciones'];
			$centro_edu_anterior = $_GET['centro_edu_anterior'];
			$id_periodo = $_GET['id_periodo'];
			

		$date2 = date('Y-m-d');//

		//---------------Select comprobar si el usuario ya esta registrado

			$sql= "SELECT * FROM `estudiantes` WHERE `CEDULA` = '$cedula'";
			mysql_select_db($db_name, $db_connection);
			$retry_value = mysql_query($sql, $db_connection);
			$resp = json_encode($retry_value);
			//$num = mysql_num_rows($retry_value);
			if ($resp =="true")
			{
					
					
					echo "true"; //lo que se envia de respuesta al ajax de javascript

					//echo '<script type="text/javascript">$("#resultado").html("<div style = background:green >Acceso correcto </div>");</script>';

				  
			}else
			{
				//-------------------Select ingresar un nuevo usuario






				$insertar_valores="INSERT INTO `estudiantes` ( `CEDULA`, `ID_JORNADA`, `ID_REFRIGERIO`, `NOMBRE`, `FECHA_NACIMIENTO`, `ANIOS`, `MESES`, `SEXO`, `TALLA`, `PESO`, `TORAX`, `ALIMENTOS_EXCLUIDOS`, `PROBLEMAS_SALUD`, `ALERGIAS`, `MEDICACION`, `PEDIATRA`, `TEL_PEDIATRA`, `PERSO_RECIBIR_NINO`, `TEL_EMERGENCIA`, `OBSERVACIONES`, `CENTRO_EDU_ANTERIOR`) VALUES
				    ( '$cedula', $id_jornada , $id_refrigerio , '$nombre', '$fecha_naci', $anios, $meses, '$sexo', $talla, $peso, $torax, '$alimentos_excluidos', '$problemas_salud', '$alergias', '$medicacion', '$pediatra', '$tel_pediatra', '$perso_recibir_ninios', '$tel_emergencia', '$observaciones', '$centro_edu_anterior')";


				mysql_select_db($db_name, $db_connection);
				$retry_value = mysql_query($insertar_valores, $db_connection);
				$respu = json_encode($retry_value);
				
					if (!$retry_value) {
						
						echo "error";
					
				  	  //lo que se envia de respuesta al ajax de javascript
				   
					}else 
				{
					

					$paralelo = 0;	
				$insertar_valores="INSERT INTO `matricula`(`CEDULA`, `ID_NIVEL`, `FECHA`, `ESTADO_MAT`,ID_PERIODO,ID_PARALELO) VALUES ('$cedula',$id_nivel,'$date2','pendiente','$id_periodo','$paralelo')";

					
					mysql_select_db($db_name, $db_connection);
					$retry_value = mysql_query($insertar_valores, $db_connection);
				
				//$num1 = mysql_num_rows($retry_value);

				if (!$retry_value) {
					
				   echo "error"; //lo que se envia de respuesta al ajax de javascript
				   
				}else 
					{
						echo "false"; //lo que se envia de respuesta al ajax de javascript
					}
					
				}	
				
				//header('Location: ../matricula.html');
				
			

			}
		

			


		mysql_close($db_connection);

/*
	}else
	{
		echo "true";
	}

}else
{
	echo "llene los campos";
}*/





?>