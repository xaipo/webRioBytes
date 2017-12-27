$(document).ready(ini);  //---se inicia al ejecutar la linea de ref code.js en el encabezado de html

function ini ()
{

	$("#btnregistrar").click(enviarDatos); //Se ejecuta al precionar el boton 

	

}
function enviarDatos()
{

	////--------Datos Obtenidos desde el html
	var cedula = $('#cedula').val();
	var nombre = $('#textnom_usuario').val();
	var fecha_naci = $('#textfecha_naci').val();
	var años = 0;
	var meses = 0;
	var sexo = $('#opsexo:checked').val();
	var talla = $('#numtalla').val();
	var peso = $('#numpeso').val();
	var torax = $('#numtorax').val();
	var id_jornada = $('#opjornada:checked').val();
	var nivel = $('#textopnivel:checked').val();
	var id_refrigerio = $('#textoplunch:checked').val();
	var alimentos_excluidos = $('#textalimen_exc').val();
	var problemas_salud = $('#textprob_salud').val();
	var alergias = $('#textaler_niño').val();
	var medicacion = $('#textmedi_recibe').val();
	var pediatra = $('#text_nom_pedia').val();
	var tel_pediatra = $('#numtelf').val();
	var perso_recibir_niños = $('#textreci_niño').val();
	var tel_emergencia = $('#num_telf_emerg').val();
	var observaciones = $('#textobserv').val();
	var centro_edu_anterior = $('#textcentro_edu').val();

// funcion para enviar datos al archivo php y devuelve un valor string
	$.ajax({

		url:"php/ingresar.php",
		success:function(result) //devuelve el resultado desde php
		{
			//alert(result); 
			if (result =="true")
			{

				
				$("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				alert("El Usuario ya se encuentra registrado");
				
			}
			if(result =="false")
			{
				
				//alert("Registro Exitoso");
				$("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");
				
			}
			if((result != "true")&&(result !="false"))
			{
				$("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				alert("Error en la base de datos, No se ingreso el usuario");
			}
			
		},
		data:{ 
			id_refrigerio:id_refrigerio,
			id_jornada:id_jornada,
			cedula:cedula,
			nombre:nombre,
			fecha_naci:fecha_naci,
			anios:años,
			meses:meses,
			sexo:sexo,
			talla:talla,
			peso:peso,
			torax:torax,	
			//nivel:nivel,
			alimentos_excluidos:alimentos_excluidos,
			problemas_salud:problemas_salud,
			alergias:alergias,
			medicacion:medicacion,
			pediatra:pediatra,
			tel_pediatra:tel_pediatra,
			perso_recibir_ninios:perso_recibir_niños,
			tel_emergencia:tel_emergencia,
			observaciones:observaciones,
			centro_edu_anterior:centro_edu_anterior
		},
		type:"GET"
	});




	
}