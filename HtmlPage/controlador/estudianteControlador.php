<?php

//include "../datos/estudianteDatos.php";

class estudianteControlador
{
	function insertarEstudiante($id_refrigerio,$id_jornada,$cedula,$nombre,$fecha_nacimiento,
								$años,$meses,$sexo,$talla,$peso,$torax,$alimentos_excluidos,$problemas_salud,
								$alergias,$medicacion,$pediatra,$tel_pediatra,$perso_recibir_niños,
								$tel_emergencia,$observaciones,$centro_edu_anterior)
	{
		$obj = new estudianteDatos();
		$años = calculaedadyear();
		$meses = calculaedadmes();

		return $obj->insertarEstudiante($id_refrigerio,$id_jornada,$cedula,$nombre,$fecha_nacimiento,
										$años,$meses,$sexo,$talla,$peso,$torax,$alimentos_excluidos,$problemas_salud,
										$alergias,$medicacion,$pediatra,$tel_pediatra,$perso_recibir_niños,
										$tel_emergencia,$observaciones,$centro_edu_anterior);


	}



	
}

function calculaedadyear(){
		$date2 = date('Y-m-d');//
		$diff = abs(strtotime($date2) - strtotime('1989-06-14'));
		$years = floor($diff / (365*60*60*24));
		$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
		$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));
		echo $years;
		
   }

   function calculaedadmes(){
		$date2 = date('Y-m-d');//
		$diff = abs(strtotime($date2) - strtotime('1989-06-14'));
		$years = floor($diff / (365*60*60*24));
		$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
		$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));

		return $months;

   }

   calculaedadyear();


?>