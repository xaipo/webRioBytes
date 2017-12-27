<?php
//$recaptcha = $_GET['recaptcha'];
//if ($recaptcha != '')
//{

	//$secret ="6LfSCyAUAAAAAMR63jFsO3eChALGhTkrehYrrxQg"; //Web
	//$secret ="6LfoTCAUAAAAAI6saADj8159hIYhsNooBDzacP2O"; //local
	//$ip = $_SERVER['REMOTE_ADDR'];
	//$var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
	//$array = json_decode($var, true);
	//if($array['success']) 
	//{

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


				//-----------------Toma la fecha de nacimiento y saca los años y meses que tiene el estudiante

				

				    $date2 = date('Y-m-d');//
					


				//---------------Select comprobar si el usuario ya esta registrado

						
						//-------------------Select ingresar un nuevo usuario






						$insertar_valores="SELECT * FROM `matricula` WHERE `CEDULA`= $cedula AND `ID_PERIODO`= $id_periodo";
											
									mysql_select_db($db_name, $db_connection);
									$retry_value = mysql_query($insertar_valores, $db_connection);
						
						$num = mysql_num_rows($retry_value);

						if ($num == 0) {
							
							  $insertar_valores="INSERT INTO `matricula`(`CEDULA`, `ID_NIVEL`, `FECHA`, `ESTADO_MAT`,ID_PERIODO) VALUES ('$cedula',$id_nivel,'$date2','pendiente','$id_periodo')";


								mysql_select_db($db_name, $db_connection);
									$retry_value = mysql_query($insertar_valores, $db_connection);
								
								//$num1 = mysql_num_rows($retry_value);

								if (!$retry_value) {
									
								   echo "error"; //lo que se envia de respuesta al ajax de javascript
								   
								}else 
								{
									$insertar_valores="UPDATE `estudiantes` SET `ID_JORNADA`=$id_jornada,`ID_REFRIGERIO`=$id_refrigerio,`NOMBRE`='$nombre',`FECHA_NACIMIENTO`='$fecha_naci',`ANIOS`=$years,`MESES`=$months,`SEXO`='$sexo',`TALLA`=$talla,`PESO`=$peso,`TORAX`=$torax,`ALIMENTOS_EXCLUIDOS`='$alimentos_excluidos',`PROBLEMAS_SALUD`='$problemas_salud',`ALERGIAS`='$alergias',`MEDICACION`='$medicacion',`PEDIATRA`='$pediatra',`TEL_PEDIATRA`='$tel_pediatra',`PERSO_RECIBIR_NINO`='$perso_recibir_ninios',`TEL_EMERGENCIA`='$tel_emergencia',`OBSERVACIONES`='$observaciones',`CENTRO_EDU_ANTERIOR`='$centro_edu_anterior' WHERE `CEDULA` = '$cedula'";

									mysql_select_db($db_name, $db_connection);
									$retry_value = mysql_query($insertar_valores, $db_connection);
									if (!$retry_value) {
									
								  	 echo "error"; //lo que se envia de respuesta al ajax de javascript
								   
									}else 
									{
										echo "true"; //lo que se envia de respuesta al ajax de javascript
									}
									
								}	
							   
						}else 
						{
								$insertar_valores="UPDATE `matricula` SET `ID_NIVEL`= $id_nivel,`FECHA`='$date2' WHERE `CEDULA` = '$cedula'";
											
									mysql_select_db($db_name, $db_connection);
									$retry_value = mysql_query($insertar_valores, $db_connection);
						
								//$num1 = mysql_num_rows($retry_value);

								if (!$retry_value) {
									
									   echo "false"; //lo que se envia de respuesta al ajax de javascript
									   
								}else 
								{
									$insertar_valores="UPDATE `estudiantes` SET `ID_JORNADA`=$id_jornada,`ID_REFRIGERIO`=$id_refrigerio,`NOMBRE`='$nombre',`FECHA_NACIMIENTO`='$fecha_naci',`ANIOS`=$anios,`MESES`=$meses,`SEXO`='$sexo',`TALLA`=$talla,`PESO`=$peso,`TORAX`=$torax,`ALIMENTOS_EXCLUIDOS`='$alimentos_excluidos',`PROBLEMAS_SALUD`='$problemas_salud',`ALERGIAS`='$alergias',`MEDICACION`='$medicacion',`PEDIATRA`='$pediatra',`TEL_PEDIATRA`='$tel_pediatra',`PERSO_RECIBIR_NINO`='$perso_recibir_ninios',`TEL_EMERGENCIA`='$tel_emergencia',`OBSERVACIONES`='$observaciones',`CENTRO_EDU_ANTERIOR`='$centro_edu_anterior' WHERE `CEDULA` = '$cedula'";

									mysql_select_db($db_name, $db_connection);
									$retry_value = mysql_query($insertar_valores, $db_connection);
									if (!$retry_value) {
									
								  	 echo "error"; //lo que se envia de respuesta al ajax de javascript
								   
									}else 
									{
										echo "true"; //lo que se envia de respuesta al ajax de javascript
									}
								}	
						}	





						
						
						//header('Location: ../matricula.html'); //Este no descomentar
						

				mysql_close($db_connection);

		//}

		//else
	//{
	//	echo "true";
	//}

//}else
//{
//	echo "llene los campos";
//}





?>