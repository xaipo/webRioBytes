<?php

//chaptcha

$recaptcha = $_GET['recaptcha'];
if ($recaptcha != '')
{
	$secret ="6LfSCyAUAAAAAMR63jFsO3eChALGhTkrehYrrxQg";
	$ip = $_SERVER['REMOTE_ADDR'];
	$var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
	$array = json_decode($var, true);
	if($array['success']) 
	{
		
		echo "true";
		//Envio de correo electronicos
			$nombre = $_GET['nombre'];
			$email = $_GET['email'];
			$telefono = $_GET["telefono"];

			//$mensaje = $_POST['mensaje'];

			$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
			$mensaje .= "Su e-mail es: " . $email . " \r\n";
			$mensaje .= "Su telefono es: " . $telefono . " \r\n";
			$mensaje .= "Mensaje: " . $_GET['mensaje'] . " \r\n";
			$mensaje .= "Enviado el " . date('d/m/Y', time());



			// Varios destinatarios
			$para  = 'info@ceipekelandia.com';

			// título
			$título = 'Pekelandia';


			// Para enviar un correo HTML, debe establecerse la cabecera Content-type
			$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
			$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

			// Cabeceras adicionales
			$cabeceras .= 'To: Pekelandia <info@ceipekelandia.com>' . "\r\n";
			$cabeceras .= 'From: Recordatorio <info@ceipekelandia.com>' . "\r\n";


			// Enviarlo
			mail($email, $título, $mensaje, $cabeceras);

	}else
	{
		echo "false";
	}
}
else
{
	echo "Rellene todos los campos";
}

//header("Location:../contactos.html");

?>