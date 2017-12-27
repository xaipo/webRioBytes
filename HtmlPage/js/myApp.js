var app = angular.module('myApp', ['ngStorage','ngRoute']);

app.config (function($routeProvider ,$provide){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/inicio",{templateUrl:"datos/test.html"});
    $routeProvider.when("/mostrarnoticias",{templateUrl:"paginas/NoticiaCompleta.html", controller:'mostrarController'});
    $routeProvider.when("/vision",{templateUrl:"datos/vision_mision.html", controller:'matriculaController'});
    $routeProvider.when("/principios",{templateUrl:"datos/principios.html", controller:'matriculaController'});
    $routeProvider.when("/perfiles",{templateUrl:"datos/perfiles.html", controller:'matriculaController'});
    $routeProvider.when("/perfiles_doc",{templateUrl:"datos/perfiles_docentes.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_activa",{templateUrl:"datos/activada_matricula.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_desactivada",{templateUrl:"datos/desactivada_matricula.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_primera",{templateUrl:"datos/matricula_primera_vez.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_antigua",{templateUrl:"datos/matricula_antigua.html", controller:'mostrarController'});
    $routeProvider.when("/inicial1",{templateUrl:"datos/fotosinicial1.html"});
    $routeProvider.when("/inicial2",{templateUrl:"datos/fotosinicial2.html"});
    $routeProvider.when("/inicial23",{templateUrl:"datos/fotosinicial23.html"});
    $routeProvider.when("/inicialpeke",{templateUrl:"datos/fotospeke.html"});
    $routeProvider.when("/datos_padres",{templateUrl:"datos/datospadres.html"});
    $routeProvider.when("/datos_padres_modificar",{templateUrl:"datos/datospadresmodificar.html"});
});


app.controller('noticiasController', function($scope, $http, $rootScope, $location,$localStorage){

	
          $scope.noticia_act;  
    		
          $scope.inicializar = function () {

		$http.get("php/consulta.php")
			.then(function (response) {

				$scope.listNoticias = response.data;
				console.log($scope.listNoticias);

			}, function errorCallback(response) {

				console.log(response);
			});

		window.location="#/inicio";


	}

	 $scope.inicializarNotiCompleta = function () {

	 		$scope.noticia_Completa = JSON.parse(localStorage.getItem("noticia"));

	}

       $scope.ini_acerca = function () {


          	window.location="#/vision";

         
    }


		$scope.ver_mas = function (noticia) {
			console.log("Holaaa");
			window.localStorage["noticia"]= JSON.stringify(noticia);
			window.location ="#/mostrarnoticias";
			

		}

		$scope.ver_inicio = function () {
			console.log("hey");
			window.location="#/inicio";
			


		}

		$scope.ver_vision = function () {
			
				window.location="#/vision";

		}

		$scope.ver_principios = function () {
			
				window.location="#/principios";

		}

		$scope.ver_perfiles = function () {
			
				window.location="#/perfiles";

		}

		$scope.ver_perfiles_doc = function () {
			
				window.location="#/perfiles_doc";

		}

		$scope.verinicial1 = function () {
			
				window.location="#/inicial1";
				console.log("me dio click");

		}
		$scope.verinicial2 = function () {
			
				window.location="#/inicial2";
				console.log("me dio click");

		}
			$scope.verinicial23 = function () {
			
				window.location="#/inicial23";
				console.log("me dio click");

		}

		$scope.verfotospeke = function () {
			
				window.location="#/inicialpeke";
				console.log("me dio click");

		}


		
   
	});

app.controller('matriculaController', function($scope, $http, $rootScope, $location,$localStorage){

	
          $scope.noticia_act;  
       		

          $scope.inicializar = function () {


          	 $http.get("php/consultar_dispo_matri.php")
            .then(function (response) {

                $scope.estado_mat = response.data;
               // console.log(response.data[0].ESTADO);

                if(response.data[0].ESTADO == "si")
		            {
		            	window.location="#/matricula_activa";
		            }
		            else
		            {
		            	window.location="#/matricula_desactivada";
		    		}
          
            }, function errorCallback(response) {
            
               
            });


             $http.get("php/consulta_jornada.php")
            .then(function (response) {

                $scope.listajornada = response.data;
               // console.log(response.data[0].ESTADO);
          
            }, function errorCallback(response) {
            
               
            });


              $http.get("php/consulta_nivel.php")
            .then(function (response) {

                $scope.listanivel = response.data;
               // console.log(response.data[0].ESTADO);
          
            }, function errorCallback(response) {
            
               
            });

               $http.get("php/consulta_lunch.php")
            .then(function (response) {

                $scope.listalunch = response.data;
               // console.log(response.data[0].ESTADO);
          
            }, function errorCallback(response) {
            
               
            });

            //Consulta las disponibilidad de la matricula

             $.ajax({

			 url:"php/disponibilidad_matri.php",
			 success:function(result) //devuelve el resultado desde php
			 {
				 //alert(result);
				 $scope.dispo_matri = JSON.parse(result);
				 console.log($scope.dispo_matri);
         console.log($scope.dispo_matri[0].ID_PERIODO);
				

			 },
			 data:{
				 


			 },
			 type:"GET"
		 });


           

        
    }

     $scope.iniform = function () {


          		$("#btncancelar").show();
				$("#btnregistrar").show();
				$("#btnmodificar").show();
				$("#btnsiguiente").hide();
				$("#cedula").html("<input autofocus> </input>");

         $('#textfecha_naci').datepicker({
            autoclose: true,
            changeMonth: true,
            changeYear: true,
            format: 'yyyy-mm-dd', //Se especifica como deseamos representarla
            firstDay: 1

        });


         
    }
     $scope.inimodificar = function () {


          		$("#btncancelar").show();
				$("#btnregistrar").show();
				$("#btnsiguiente").hide();
		        $scope.estudiante=  JSON.parse(localStorage.getItem("estudiante"));
                $('#textfecha_naci').datepicker({
                  autoclose: true,
                  changeMonth: true,
                  changeYear: true,
                  format: 'dd-mm-yyyy', //Se especifica como deseamos representarla
                  firstDay: 1

              });

         
    }

      $scope.inidatosestu = function () {

      			$("#btncancelar").show();
    				$("#btnregistrar").show();
    				$("#btnimprimir").hide();
              $scope.estudiante=  JSON.parse(localStorage.getItem("estudiante"));
              console.log($scope.estudiante);
          		$scope.datospadre=  JSON.parse(localStorage.getItem("datospadre"));
          		$scope.datosmadre=  JSON.parse(localStorage.getItem("datosmadre"));
		  
		  //Consulta las disponibilidad de la matricula

		  $.ajax({

			  url:"php/disponibilidad_matri.php",
			  success:function(result) //devuelve el resultado desde php
			  {
				  //alert(result);
				  $scope.dispo_matri = JSON.parse(result);
				  console.log($scope.dispo_matri);
				  console.log($scope.dispo_matri[0].ID_PERIODO);
				  $scope.id_perido_actual = $scope.dispo_matri[0].ID_PERIODO;

				  $.ajax({

					  url:"php/consultar_nivelxCedula.php",
					  success:function(result) //devuelve el resultado desde php
					  {
						  console.log(JSON.parse(result));
						  var nivel = JSON.parse(result);
						  $scope.nombre_nivel = nivel.DESCRIPCION_NIVEL;
						  console.log($scope.nombre_nivel);


					  },
					  data:{

						  cedula:$scope.estudiante.CEDULA,
						  id_periodo : $scope.id_perido_actual

					  },
					  type:"GET"
				  });



			  },
			  data:{



			  },
			  type:"GET"
		  });



		  $.ajax({

			  url:"php/consultar_jornadaxID.php",
			  success:function(result) //devuelve el resultado desde php
			  {
				  console.log(JSON.parse(result));
				  var jornada = JSON.parse(result);
				  $scope.nombre_jornada = jornada.DESCRIPCION_JORNADA;
				  console.log($scope.nombre_jornada);

			  },
			  data:{

				  id_jornada:$scope.estudiante.ID_JORNADA

			  },
			  type:"GET"
		  });

		  $.ajax({

			  url:"php/consultar_lunchxID.php",
			  success:function(result) //devuelve el resultado desde php
			  {
				  console.log(JSON.parse(result));
				  var refrigerio = JSON.parse(result);
				  $scope.nombre_refrigerio = refrigerio.DESCRIPCION_REFRI;
				  console.log($scope.nombre_refrigerio);

			  },
			  data:{

				  id_lunch:$scope.estudiante.ID_REFRIGERIO

			  },
			  type:"GET"
		  });



          		$("#cedula_estu").hide();
          		$("#nombre_estu").hide();
          		$("#fecha_estu").hide();
          		$("#sexo_estu").hide();
          		$("#talla_estu").hide();
          		$("#peso_estu").hide();
          		$("#torax_estu").hide();
          		$("#jornada_estu").hide();
          		$("#level_estu").hide();
          		$("#lunch_estu").hide();
          		$("#alimenros_estu").hide();
          		$("#problemas_estu").hide();
          		$("#alergias_estu").hide();
          		$("#medicacion_estu").hide();
          		$("#nompedi_estu").hide();
          		$("#numtelf_estu").hide();
          		$("#reciniño_estu").hide();
          		$("#telfemer_estu").hide();
          		$("#observ_estu").hide();
          		$("#centroedu_estu").hide();

          		


         
    }

	$scope.inidatosestumodificar = function () {

		$("#btncancelar").show();
		$("#btnregistrar").show();
		$("#btnimprimir").hide();
		$scope.estud=  JSON.parse(localStorage.getItem("estudiante1"));
		$scope.datospadre=  JSON.parse(localStorage.getItem("datospadre"));
		$scope.datosmadre=  JSON.parse(localStorage.getItem("datosmadre"));

		console.log($scope.estu.ID_JORNADA);

		//Consulta las disponibilidad de la matricula

		$.ajax({

			url:"php/disponibilidad_matri.php",
			success:function(result) //devuelve el resultado desde php
			{
				//alert(result);
				$scope.dispo_matri = JSON.parse(result);
				console.log($scope.dispo_matri);
				console.log($scope.dispo_matri[0].ID_PERIODO);
				$scope.id_perido_actual = $scope.dispo_matri[0].ID_PERIODO;

				$.ajax({

					url:"php/consultar_nivelxCedula.php",
					success:function(result) //devuelve el resultado desde php
					{
						console.log(JSON.parse(result));
						var nivel = JSON.parse(result);
						$scope.nombre_nivel = nivel.DESCRIPCION_NIVEL;
						console.log($scope.nombre_nivel);


					},
					data:{

						cedula:$scope.estu.CEDULA,
						id_periodo : $scope.id_perido_actual

					},
					type:"GET"
				});



			},
			data:{



			},
			type:"GET"
		});



		$.ajax({

			url:"php/consultar_jornadaxID.php",
			success:function(result) //devuelve el resultado desde php
			{
				console.log(JSON.parse(result));
				var jornada = JSON.parse(result);
				$scope.nombre_jornada = jornada.DESCRIPCION_JORNADA;
				console.log($scope.nombre_jornada);

			},
			data:{

				id_jornada:$scope.estu.ID_JORNADA

			},
			type:"GET"
		});

		$.ajax({

			url:"php/consultar_lunchxID.php",
			success:function(result) //devuelve el resultado desde php
			{
				console.log(JSON.parse(result));
				var refrigerio = JSON.parse(result);
				$scope.nombre_refrigerio = refrigerio.DESCRIPCION_REFRI;
				console.log($scope.nombre_refrigerio);

			},
			data:{

				id_lunch:$scope.estu.ID_REFRIGERIO

			},
			type:"GET"
		});



		$("#cedula_estu").hide();
		$("#nombre_estu").hide();
		$("#fecha_estu").hide();
		$("#sexo_estu").hide();
		$("#talla_estu").hide();
		$("#peso_estu").hide();
		$("#torax_estu").hide();
		$("#jornada_estu").hide();
		$("#level_estu").hide();
		$("#lunch_estu").hide();
		$("#alimenros_estu").hide();
		$("#problemas_estu").hide();
		$("#alergias_estu").hide();
		$("#medicacion_estu").hide();
		$("#nompedi_estu").hide();
		$("#numtelf_estu").hide();
		$("#reciniño_estu").hide();
		$("#telfemer_estu").hide();
		$("#observ_estu").hide();
		$("#centroedu_estu").hide();





	}

     $scope.datospadres = function () {


          		window.location="#/datos_padres";

         
    }

     $scope.datospadresmodificar = function () {

     		$scope.estu=  JSON.parse(localStorage.getItem("estudiante"));
     		var cedula = $scope.estu.CEDULA;
     		console.log(cedula);

     		$.ajax({

				url:"php/consultarpadres.php",
				success:function(result) //devuelve el resultado desde php
				{
					console.log(result);
					if (result == "[]")
					{

						window.location="#/datos_padres";
						swal("Alerta!", "No existen padres asociados!", "warning");
						
						
						
					}
					else
					{
					    var padres = JSON.parse(result);
					    var cedulapadre = padres[0].CI_PADRE;	
					    var cedulamadre = padres[1].CI_PADRE;	
					    console.log(cedulapadre);
					    console.log(cedulamadre);

					    $.ajax({

								url:"php/consultardatospadre.php",
								success:function(result) //devuelve el resultado desde php
								{
									console.log(result);
										

										window.localStorage["datospadre"] = result;			
										
										window.location="#/datos_padres_modificar";
								},
								data:{ 
									
									cedula:cedulapadre
									
								},
								type:"GET"
							});

					     $.ajax({

								url:"php/consultardatospadre.php",
								success:function(result) //devuelve el resultado desde php
								{
									console.log(result);
										

										window.localStorage["datosmadre"] = result;			
										window.location="#/datos_padres_modificar";
										
			
								},
								data:{ 
									
									cedula:cedulamadre
									
								},
								type:"GET"
							});

						swal("Exito!", "Los padres ya se encuentra registrados!", "success");

					}
					
					
					
				},
				data:{ 
					
					cedula:cedula
					
				},
				type:"GET"
			});


         
    }


       $scope.ver_page1 = function () {


          	window.location="#/matricula_primera";

         
    }
      $scope.ver_page2 = function () {


          	window.location="#/matricula_antigua";

         
    }


 $scope.enviarDatos = function () {


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
	var id_jornada = document.getElementById("jornada").value;
	var nivel = document.getElementById("nivel").value;
	var id_refrigerio = document.getElementById("lunch").value;
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
	//var recaptcha = $('#g-recaptcha-response').val();   //capchap




	 console.log(fecha_naci);

	 //CAlculo del los años meses del la fecha actual
	 console.log ("aca estoy");

	 // realizamos el calculo

	 var today = new Date();
	 console.log(today);

	 var values = fecha_naci.split("-");


	 var dia = values[2];
	 var mes = values[1];
	 var ano = values[0];

	 var fecha_nacimiento = ano+"-"+mes+"-"+dia;

	 console.log(dia);
	 console.log(mes);
	 console.log(ano);

	 var fecha_hoy = new Date();
	 var ahora_ano = fecha_hoy.getFullYear();
	 var ahora_mes = fecha_hoy.getMonth()+1;
	 var ahora_dia = fecha_hoy.getDate();

	 console.log(ahora_dia);
	 console.log(ahora_mes);
	 console.log(ahora_ano);

	 // realizamos el calculo
	 var edad = (ahora_ano + 1900) - ano;
	 if ( ahora_mes < mes )
	 {
		 console.log(1);
		 edad--;
	 }

	 if ((mes == ahora_mes) && (ahora_dia < dia))
	 {
		 console.log(2);
		 edad--;
	 }
	 if (edad >= 1900)
	 {
		 console.log(3);
		 edad -= 1900;
	 }

	 // calculamos los meses
	 var meses=0;
	 if(ahora_mes>mes) {
		 console.log(4);
		 meses = ahora_mes - mes;

	 }
	 if(ahora_mes<mes) {
		 console.log(5);
		 meses = 12 - (mes - ahora_mes);
	 }
	 if(ahora_mes==mes && dia>ahora_dia) {

		 console.log(6);
		 meses = 11;
	 }
	 // calculamos los dias
	 var dias=0;
	 if(ahora_dia>dia) {
		 console.log(7);
		 dias = ahora_dia - dia;
	 }
	 if(ahora_dia<dia)
	 {
		 console.log(8);
		 ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
		 dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
	 }





	 console.log("años hoy"+edad);
	 console.log("meses hoy "+meses);
	 console.log("dias hoy "+dias);

	 var edad_niño = "Edad Actual: "+edad+" años, con "+meses+" meses y "+dias+" dias";
	 console.log(edad_niño);

	 // CAlculo del los años meses y dias a la fecha del 31 de Diciembre del año actual

	 var fecha_limite = ahora_ano +"-12-31";
	 console.log (fecha_limite);

	 // realizamos el calculo


	 var values1 = fecha_limite.split("-");


	 var dia_max = values1[2];
	 var mes_max = values1[1];
	 var ano_max = values1[0];

	 console.log(dia_max);
	 console.log(mes_max);
	 console.log(ano_max);



	 // realizamos el calculo
	 var edad_max = (parseInt(ano_max) + 1900) - ano;
	 console.log(edad_max);
	 if ( mes_max  < mes )
	 {
		 console.log(1);
		 edad_max--;
	 }

	 if ((mes == mes_max ) && (dia_max < dia))
	 {
		 console.log(2);
		 edad_max--;
	 }
	 if (edad_max >= 1900)
	 {
		 console.log(3);
		 edad_max -= 1900;
	 }

	 // calculamos los meses
	 var meses_max=0;
	 if(mes_max >mes) {
		 console.log(4);
		 meses_max = mes_max  - mes;

	 }
	 if(mes_max <mes) {
		 console.log(5);
		 meses_max = 12 - (mes - mes_max);
	 }
	 if((mes_max ==mes) && (dia>dia_max)) {

		 console.log(6);
		 meses_max = 11;
	 }
	 // calculamos los dias
	 var dias_max=0;
	 if(dia_max>dia) {
		 console.log(7);
		 dias_max = dia_max - dia;
	 }
	 if(dia_max<dia)
	 {
		 console.log(8);
		 ultimoDiaMes1=new Date(ano_max, mes_max, 0);
		 dias_max=ultimoDiaMes1.getDate()-(dia-dia_max);
	 }





	 console.log("años 31 de dic "+edad_max);
	 console.log("meses 31 de dic "+meses_max);
	 console.log("dias 31 de dic "+dias_max);


	 if(nivel == 1)
	 {
		 if(((edad == 1)&&(meses >= 6))||(edad>1))
		 {

			 if((edad_max<3)&&(meses_max<=12)&&(dias_max<=31))
			 {

				 if($scope.validar_cedula(cedula) == 1) {

// funcion para enviar datos al archivo php y devuelve un valor string
					 $.ajax({

						 url: "php/ingresar.php",
						 success: function (result) //devuelve el resultado desde php
						 {
							// alert(result);
							 console.log(result);
							 if (result == "true") {


								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("El Usuario ya se encuentra registrado");

							 }
							 if (result == "false") {
								 $("#btncancelar").hide();
								 $("#btnregistrar").hide();
								 $("#btnsiguiente").show();

								 //alert("Registro Exitoso");
								 $("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");

								 $.ajax({

									 url: "php/consultar_cedula.php",
									 success: function (result) //devuelve el resultado desde php
									 {


										 window.localStorage["estudiante"] = JSON.stringify(JSON.parse(result));


									 },
									 data: {

										 cedula: cedula

									 },
									 type: "GET"
								 });

							 }
							 if ((result != "true") && (result != "false")) {
								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("Error en la base de datos, No se ingreso el usuario");
							 }

						 },
						 data: {
							 id_refrigerio: id_refrigerio,
							 id_jornada: id_jornada,
							 cedula: cedula,
							 nombre: nombre,
							 fecha_naci: fecha_nacimiento,
							 anios: edad,
							 meses: meses,
							 sexo: sexo,
							 talla: talla,
							 peso: peso,
							 torax: torax,
							 nivel: nivel,
							 alimentos_excluidos: alimentos_excluidos,
							 problemas_salud: problemas_salud,
							 alergias: alergias,
							 medicacion: medicacion,
							 pediatra: pediatra,
							 tel_pediatra: tel_pediatra,
							 perso_recibir_ninios: perso_recibir_niños,
							 tel_emergencia: tel_emergencia,
							 observaciones: observaciones,
							 centro_edu_anterior: centro_edu_anterior,
							 // recaptcha: recaptcha,
							 id_periodo: $scope.dispo_matri[0].ID_PERIODO

						 },
						 type: "GET"
					 });
				 }else {
					 swal("Error!", "La cedula esta incorrecta!", "error");
				 }


			 }else {
				 swal("Alerta!", "La edad exede para ingresar al nivel 1 "+edad_niño, "warning");
			 }


		 }else
		 {
			 swal("Alerta!", "No tiene la minima edad para ingresar a Nivel 1 " +edad_niño, "warning");
		 }
	 }

	 if(nivel == 2)
	 {
		 if(((edad_max == 3)&&(meses_max >= 0)&&(dias_max>=0))||(edad_max>3))
		 {

			 if((edad_max<4)&&(meses_max<=12)&&(dias_max<=31))
			 {
				 if($scope.validar_cedula(cedula) == 1) {

// funcion para enviar datos al archivo php y devuelve un valor string
					 $.ajax({

						 url: "php/ingresar.php",
						 success: function (result) //devuelve el resultado desde php
						 {
							// alert(result);
							 console.log(result);
							 if (result == "true") {


								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("El Usuario ya se encuentra registrado");

							 }
							 if (result == "false") {
								 $("#btncancelar").hide();
								 $("#btnregistrar").hide();
								 $("#btnsiguiente").show();

								 //alert("Registro Exitoso");
								 $("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");

								 $.ajax({

									 url: "php/consultar_cedula.php",
									 success: function (result) //devuelve el resultado desde php
									 {


										 window.localStorage["estudiante"] = JSON.stringify(JSON.parse(result));


									 },
									 data: {

										 cedula: cedula

									 },
									 type: "GET"
								 });

							 }
							 if ((result != "true") && (result != "false")) {
								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("Error en la base de datos, No se ingreso el usuario");
							 }

						 },
						 data: {
							 id_refrigerio: id_refrigerio,
							 id_jornada: id_jornada,
							 cedula: cedula,
							 nombre: nombre,
							 fecha_naci: fecha_nacimiento,
							 anios: años,
							 meses: meses,
							 sexo: sexo,
							 talla: talla,
							 peso: peso,
							 torax: torax,
							 nivel: nivel,
							 alimentos_excluidos: alimentos_excluidos,
							 problemas_salud: problemas_salud,
							 alergias: alergias,
							 medicacion: medicacion,
							 pediatra: pediatra,
							 tel_pediatra: tel_pediatra,
							 perso_recibir_ninios: perso_recibir_niños,
							 tel_emergencia: tel_emergencia,
							 observaciones: observaciones,
							 centro_edu_anterior: centro_edu_anterior,
							 // recaptcha: recaptcha,
							 id_periodo: $scope.dispo_matri[0].ID_PERIODO

						 },
						 type: "GET"
					 });
				 }else {
					 swal("Error!", "La cedula esta incorrecta!", "error");
				 }


			 }else {
				 swal("Alerta!", "La edad exede para el Nivel 2 (3-4)años "+edad_niño, "warning");
			 }




		 }else
		 {
			 swal("Alerta!", "No tiene la minima edad para ingresar a NIvel 2 (3-4)años "+edad_niño, "warning");
		 }
	 }

	 if(nivel == 3)
	 {
		 if(((edad_max == 4)&&(meses_max >= 0)&&(dias_max>=0))||(edad_max>4))
		 {

			 if((edad_max<5)&&(meses_max<=12)&&(dias_max<=31))
			 {
				 if($scope.validar_cedula(cedula) == 1) {

// funcion para enviar datos al archivo php y devuelve un valor string
					 $.ajax({

						 url: "php/ingresar.php",
						 success: function (result) //devuelve el resultado desde php
						 {
							// alert(result);
							 console.log(result);
							 if (result == "true") {


								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("El Usuario ya se encuentra registrado");

							 }
							 if (result == "false") {
								 $("#btncancelar").hide();
								 $("#btnregistrar").hide();
								 $("#btnsiguiente").show();

								 //alert("Registro Exitoso");
								 $("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");

								 $.ajax({

									 url: "php/consultar_cedula.php",
									 success: function (result) //devuelve el resultado desde php
									 {


										 window.localStorage["estudiante"] = JSON.stringify(JSON.parse(result));


									 },
									 data: {

										 cedula: cedula

									 },
									 type: "GET"
								 });

							 }
							 if ((result != "true") && (result != "false")) {
								 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
								 alert("Error en la base de datos, No se ingreso el usuario");
							 }

						 },
						 data: {
							 id_refrigerio: id_refrigerio,
							 id_jornada: id_jornada,
							 cedula: cedula,
							 nombre: nombre,
							 fecha_naci: fecha_nacimiento,
							 anios: años,
							 meses: meses,
							 sexo: sexo,
							 talla: talla,
							 peso: peso,
							 torax: torax,
							 nivel: nivel,
							 alimentos_excluidos: alimentos_excluidos,
							 problemas_salud: problemas_salud,
							 alergias: alergias,
							 medicacion: medicacion,
							 pediatra: pediatra,
							 tel_pediatra: tel_pediatra,
							 perso_recibir_ninios: perso_recibir_niños,
							 tel_emergencia: tel_emergencia,
							 observaciones: observaciones,
							 centro_edu_anterior: centro_edu_anterior,
							 // recaptcha: recaptcha,
							 id_periodo: $scope.dispo_matri[0].ID_PERIODO

						 },
						 type: "GET"
					 });
				 }else {
					 swal("Error!", "La cedula esta incorrecta!", "error");
				 }

			 }else {
				 swal("Alerta!", "La edad exede para el Nivel 2 (4-5)años "+edad_niño, "warning");
			 }

		 }else
		 {
			 swal("Alerta!", "No tiene la minima edad para ingresar a NIvel 2 (3-4)años "+edad_niño, "warning");
		 }
	 }


         
    }

 $scope.enviarDatosPadres = function () {

 	$scope.estu=  JSON.parse(localStorage.getItem("estudiante"));

          	////--------Datos Obtenidos desde el html
	var cedulapa = $('#textcedulapa').val();
	var nombrepa = $('#textnombrepa').val();
	var lugartrapa = $('#textlugar_trapa').val();
	var  direccion_trapa= $('#textdir_trapa').val();  
	var telefonopa = $('#texttel_pa').val();
	var emailpa = $('#textemail_pa').val();
	var domiciliopa = $('#textdir_do_pa').val();
	var tipo_vipa = document.getElementById("viviendapa").value;
	var teauxpa = $('#texttel_aux_pa').val();
	var id_tipopa = 1;
	
	var cedulama = $('#textcedulama').val();
	var nombrema = $('#textnombrema').val();
	var lugartrama = $('#textlugar_tra_ma').val();
	var  direccion_trama = $('#textdir_tra_ma').val();
	var telefonoma = $('#texttel_ma').val();
	var emailma = $('#textemail_ma').val();
	var domicilioma = $('#textdir_do_ma').val();
	var tipo_vima = document.getElementById("viviendama").value;
	var teauxma = $('#texttel_aux_ma').val();
	var id_tipoma = 2;
	//var recaptcha = $('#g-recaptcha-response').val();
	var cedula_estu = $scope.estu.CEDULA;

     if(($scope.validar_cedula(cedulapa) == 1) && ($scope.validar_cedula(cedulama) == 1)) {
// funcion para enviar datos al archivo php y devuelve un valor string
         $.ajax({

             url: "php/ingresarpadres.php",
             success: function (result) //devuelve el resultado desde php
             {
                 //alert(result);
                 if (result == "false") {

                     $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");

                 }
                 if (result == "true") {

                     $("#btncancelar").hide();
                     $("#btnregistrar").hide();
                     $("#btnimprimir").show();
                     //alert("Registro Exitoso");
                     $("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");

                 }
                 if ((result != "true") && (result != "false")) {
                     $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
                     alert("Error en la base de datos, No se ingreso el usuario");
                 }

             },
             data: {
                 cedulapa: cedulapa,
                 nombrepa: nombrepa,
                 lugartrapa: lugartrapa,
                 direccion_trapa: direccion_trapa,
                 telefonopa: telefonopa,
                 emailpa: emailpa,
                 domiciliopa: domiciliopa,
                 tipo_vipa: tipo_vipa,
                 teauxpa: teauxpa,
                 id_tipopa: id_tipopa,

                 cedulama: cedulama,
                 nombrema: nombrema,
                 lugartrama: lugartrama,
                 direccion_trama: direccion_trama,
                 telefonoma: telefonoma,
                 emailma: emailma,
                 domicilioma: domicilioma,
                 tipo_vima: tipo_vima,
                 teauxma: teauxma,
                 id_tipoma: id_tipoma,
                 //recaptcha:recaptcha,
                 cedula_estu: cedula_estu

             },
             type: "GET"
         });
     }
     if(($scope.validar_cedula(cedulapa) == 0))
     {
         swal("Error!", "Cedula del PADRE esta incorrecto, ingrese una cedula correcta!", "error");
     }
     if(($scope.validar_cedula(cedulama) == 0))
     {
         swal("Error!", "Cedula del MADRE esta incorrecto, ingrese una cedula correcta!", "error");
     }
     if(($scope.validar_cedula(cedulapa) == 0)&&($scope.validar_cedula(cedulama) == 0))
     {
         swal("Error!", "Las cedulas del PADRE y la MADRE estan INCORRECTAS!", "error");
     }


         
    }


   $scope.modificarDatosPadres = function () {

 	$scope.estu=  JSON.parse(localStorage.getItem("estudiante"));

          	////--------Datos Obtenidos desde el html
	var cedulapa = $('#textcedulapa').val();
	var nombrepa = $('#textnombrepa').val();
	var lugartrapa = $('#textlugar_trapa').val();
	var  direccion_trapa= $('#textdir_trapa').val();  
	var telefonopa = $('#texttel_pa').val();
	var emailpa = $('#textemail_pa').val();
	var domiciliopa = $('#textdir_do_pa').val();
	var tipo_vipa = document.getElementById("viviendapa").value;
	var teauxpa = $('#texttel_aux_pa').val();
	var id_tipopa = 1;
	
	var cedulama = $('#textcedulama').val();
	var nombrema = $('#textnombrema').val();
	var lugartrama = $('#textlugar_tra_ma').val();
	var  direccion_trama = $('#textdir_tra_ma').val();
	var telefonoma = $('#texttel_ma').val();
	var emailma = $('#textemail_ma').val();
	var domicilioma = $('#textdir_do_ma').val();
	var tipo_vima = document.getElementById("viviendama").value;
	var teauxma = $('#texttel_aux_ma').val();
	var id_tipoma = 2;
	//var recaptcha = $('#g-recaptcha-response').val();
	var cedula_estu = $scope.estu.CEDULA;
	

// funcion para enviar datos al archivo php y devuelve un valor string
	$.ajax({

		url:"php/modificarpadres.php",
		success:function(result) //devuelve el resultado desde php
		{
			//alert(result); 
			if (result =="false")
			{

				$("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
	
			}
			if(result =="true")
			{	
				
				$("#btncancelar").hide();
				$("#btnregistrar").hide();
				$("#btnimprimir").show();
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
				cedulapa:cedulapa,
				nombrepa:nombrepa, 
				lugartrapa:lugartrapa, 
				direccion_trapa:direccion_trapa, 
				telefonopa:telefonopa, 
				emailpa:emailpa, 
				domiciliopa:domiciliopa, 
				tipo_vipa:tipo_vipa, 
				teauxpa:teauxpa, 
				id_tipopa:id_tipopa, 
				
				cedulama:cedulama, 
				nombrema:nombrema, 
				lugartrama:lugartrama,
				direccion_trama:direccion_trama,
				telefonoma:telefonoma,
				emailma:emailma ,
				domicilioma:domicilioma, 
				tipo_vima:tipo_vima, 
				teauxma:teauxma, 
				id_tipoma:id_tipoma,
				//recaptcha:recaptcha,
				cedula_estu:cedula_estu

		},
		type:"GET"
	});


         
    }



 $scope.escogerOpcion = function () {

 	var op = $('#sel1').val();
 	console.log(op);

 	if (op=="Cédula")
 	{
 		$("#cedula").show();
		$("#nombre").hide();




 	}else
 	{
 		$("#cedula").hide();
		$("#nombre").show();
 	}



 }

$scope.validar_cedula = function (cedula) {


        var count1 = 0;
        var count2 = 0;


            var cedula = cedula;

            //Preguntamos si la cedula consta de 10 digitos
            if (cedula.length == 10) {

                //Obtenemos el digito de la region que sonlos dos primeros digitos
                var digito_region = cedula.substring(0, 2);

                //Pregunto si la region existe ecuador se divide en 24 regiones
                if (digito_region >= 1 && digito_region <= 24) {

                    // Extraigo el ultimo digito
                    var ultimo_digito = cedula.substring(9, 10);

                    //Agrupo todos los pares y los sumo
                    var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

                    //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
                    var numero1 = cedula.substring(0, 1);
                    var numero1 = (numero1 * 2);
                    if (numero1 > 9) {
                        var numero1 = (numero1 - 9);
                    }

                    var numero3 = cedula.substring(2, 3);
                    var numero3 = (numero3 * 2);
                    if (numero3 > 9) {
                        var numero3 = (numero3 - 9);
                    }

                    var numero5 = cedula.substring(4, 5);
                    var numero5 = (numero5 * 2);
                    if (numero5 > 9) {
                        var numero5 = (numero5 - 9);
                    }

                    var numero7 = cedula.substring(6, 7);
                    var numero7 = (numero7 * 2);
                    if (numero7 > 9) {
                        var numero7 = (numero7 - 9);
                    }

                    var numero9 = cedula.substring(8, 9);
                    var numero9 = (numero9 * 2);
                    if (numero9 > 9) {
                        var numero9 = (numero9 - 9);
                    }

                    var impares = numero1 + numero3 + numero5 + numero7 + numero9;

                    //Suma total
                    var suma_total = (pares + impares);

                    //extraemos el primero digito
                    var primer_digito_suma = String(suma_total).substring(0, 1);

                    //Obtenemos la decena inmediata
                    var decena = (parseInt(primer_digito_suma) + 1) * 10;

                    //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
                    var digito_validador = decena - suma_total;

                    //Si el digito validador es = a 10 toma el valor de 0
                    if (digito_validador == 10)
                        var digito_validador = 0;

                    //Validamos que el digito validador sea igual al de la cedula
                    if (digito_validador == ultimo_digito) {
                        console.log('la cedula:' + cedula + ' es correcta');
                        count1++;
                    } else {
                        console.log('la cedula:' + cedula + ' es incorrecta');
                        count2++;
                    }

                } else {
                    // imprimimos en consola si la region no pertenece
                    console.log('Esta cedula no pertenece a ninguna region');

                    count2++
                }
            } else {
                //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
                console.log('Esta cedula tiene menos de 10 Digitos');

                count2++;
            }

        console.log(count1); //corecta la cedula
        console.log(count2); //incorrecta la cedula
        return count1;


    }


 $scope.consultar_cedula = function () {

 	var op = $('#cedula_con').val();
 	//console.log(op);
 	if($scope.validar_cedula(op) == 1) {
 	$.ajax({

		url:"php/consultar_cedula.php",
		success:function(result) //devuelve el resultado desde php
		{
			console.log(result);
			if (result == "false")
			{

				window.location="#/matricula_primera";
				swal("Alerta!", "El usuario no se encuentra dentro de la BD!", "warning");
				
				
				
			}
			else
			{
				window.localStorage["estudiante"]= JSON.stringify(JSON.parse(result));			
				window.location="#/matricula_antigua"
				 swal("Exitoso!", "El usuario ya se encuentra dentro de la BD!", "success");
			}
			
			
			
		},
		data:{ 
			
			cedula:op
			
		},
		type:"GET"
	});
  }else
  {
  	swal("Error!", "La cedula esta incorrecta!", "error");
  }
}


   $scope.consultar_cedulapa = function () {

 	var op = $('#cedula_con').val();
 	console.log(op);
 	$.ajax({

		url:"php/consultarcedula_pa.php",
		success:function(result) //devuelve el resultado desde php
		{
			//console.log(result);
			if (result == "false")
			{
				
				//window.location="#/matricula_primera";
				alert("El usuario no se encuentra en la base de datos");
				
				
				
			}
			else
			{
				$scope.datapadre = JSON.parse(result);		

				alert("El Usuario ya se encuentra registrado");
				console.log($scope.datapadre);
			}
			
			
			
		},
		data:{ 
			
			cedula:op
			
		},
		type:"GET"
	});

     }
     

     $scope.enviarModificacion = function () {


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
	var id_jornada = document.getElementById("jornada").value;
	var nivel = document.getElementById("nivel").value;
	var id_refrigerio = document.getElementById("lunch").value;
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
	//var recaptcha = $('#g-recaptcha-response').val();  //capchap
  console.log($scope.dispo_matri[0].ID_PERIODO);
		 console.log(tel_emergencia);

		/* $scope.estu= {cedula:cedula,
			 nombre :nombre ,
			 fecha_naci:fecha_naci,
			 años:años,
			 meses:meses,
			 sexo:sexo,
			 talla:talla,
			 peso:peso,
			 torax:torax,
			 id_jornada:id_jornada,
			 nivel:nivel,
			 id_refrigerio:id_refrigerio,
			 alimentos_excluidos:alimentos_excluidos


		 };*/

		 console.log(fecha_naci);

		 //CAlculo del los años meses del la fecha actual
		 console.log ("aca estoy");

		 // realizamos el calculo

		 var today = new Date();
		 console.log(today);

		 var values = fecha_naci.split("-");


		 var dia = values[2];
		 var mes = values[1];
		 var ano = values[0];

		 var fecha_nacimiento = ano+"-"+mes+"-"+dia;

		 console.log(dia);
		 console.log(mes);
		 console.log(ano);

		 var fecha_hoy = new Date();
		 var ahora_ano = fecha_hoy.getFullYear();
		 var ahora_mes = fecha_hoy.getMonth()+1;
		 var ahora_dia = fecha_hoy.getDate();

		 console.log(ahora_dia);
		 console.log(ahora_mes);
		 console.log(ahora_ano);

		 // realizamos el calculo
		 var edad = (ahora_ano + 1900) - ano;
		 if ( ahora_mes < mes )
		 {
			 console.log(1);
			 edad--;
		 }

		 if ((mes == ahora_mes) && (ahora_dia < dia))
		 {
			 console.log(2);
			 edad--;
		 }
		 if (edad >= 1900)
		 {
			 console.log(3);
			 edad -= 1900;
		 }

		 // calculamos los meses
		 var meses=0;
		 if(ahora_mes>mes) {
			 console.log(4);
			 meses = ahora_mes - mes;

		 }
		 if(ahora_mes<mes) {
			 console.log(5);
			 meses = 12 - (mes - ahora_mes);
		 }
		 if(ahora_mes==mes && dia>ahora_dia) {

			 console.log(6);
			 meses = 11;
		 }
		 // calculamos los dias
		 var dias=0;
		 if(ahora_dia>dia) {
			 console.log(7);
			 dias = ahora_dia - dia;
		 }
		 if(ahora_dia<dia)
		 {
			 console.log(8);
			 ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
			 dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
		 }





		 console.log("años hoy"+edad);
		 console.log("meses hoy "+meses);
		 console.log("dias hoy "+dias);

		 var edad_niño = "Edad Actual: "+edad+" años, con "+meses+" meses y "+dias+" dias";
		 console.log(edad_niño);

		 // CAlculo del los años meses y dias a la fecha del 31 de Diciembre del año actual

		 var fecha_limite = ahora_ano +"-12-31";
		 console.log (fecha_limite);

		 // realizamos el calculo


		 var values1 = fecha_limite.split("-");


		 var dia_max = values1[2];
		 var mes_max = values1[1];
		 var ano_max = values1[0];

		 console.log(dia_max);
		 console.log(mes_max);
		 console.log(ano_max);



		 // realizamos el calculo
		 var edad_max = (parseInt(ano_max) + 1900) - ano;
		 console.log(edad_max);
		 if ( mes_max  < mes )
		 {
			 console.log(1);
			 edad_max--;
		 }

		 if ((mes == mes_max ) && (dia_max < dia))
		 {
			 console.log(2);
			 edad_max--;
		 }
		 if (edad_max >= 1900)
		 {
			 console.log(3);
			 edad_max -= 1900;
		 }

		 // calculamos los meses
		 var meses_max=0;
		 if(mes_max >mes) {
			 console.log(4);
			 meses_max = mes_max  - mes;

		 }
		 if(mes_max <mes) {
			 console.log(5);
			 meses_max = 12 - (mes - mes_max);
		 }
		 if((mes_max ==mes) && (dia>dia_max)) {

			 console.log(6);
			 meses_max = 11;
		 }
		 // calculamos los dias
		 var dias_max=0;
		 if(dia_max>dia) {
			 console.log(7);
			 dias_max = dia_max - dia;
		 }
		 if(dia_max<dia)
		 {
			 console.log(8);
			 ultimoDiaMes1=new Date(ano_max, mes_max, 0);
			 dias_max=ultimoDiaMes1.getDate()-(dia-dia_max);
		 }





		 console.log("años 31 de dic "+edad_max);
		 console.log("meses 31 de dic "+meses_max);
		 console.log("dias 31 de dic "+dias_max);


		 if(nivel == 1)
		 {
			 if(((edad == 1)&&(meses >= 6))||(edad>1))
			 {

				 if((edad_max<3)&&(meses_max<=12)&&(dias_max<=31))
				 {

					 if($scope.validar_cedula(cedula) == 1) {

						 // funcion para enviar datos al archivo php y devuelve un valor string
						 $.ajax({

							 url:"php/modificar.php",
							 success:function(result) //devuelve el resultado desde php
							 {
								 //alert(result);
								 if (result =="true")
								 {


									 $("#btncancelar").hide();
									 $("#btnmodificar").hide();
									 $("#btnsiguiente").show();
									 $("#resultado").html("<div style = 'background:green' class='text-1'> Su solicitud fue enviada correctamente</div>");
									 //alert("El Usuario ya se encuentra registrado");
									 $.ajax({

										 url:"php/consultar_cedula.php",
										 success:function(result) //devuelve el resultado desde php
										 {


											 window.localStorage["estudiante1"]= JSON.stringify(JSON.parse(result));
											 console.log(result);


										 },
										 data:{

											 cedula:cedula

										 },
										 type:"GET"
									 });

								 }
								 if(result =="false")
								 {

									 //alert("Registro Exitoso");
									 $("#resultado").html("<div style = 'background:red' class='text-1'>Error al enviar la solicitud</div>");

								 }
								 if((result != "true")&&(result !="false"))
								 {
									 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
									 alert("Error en la base de datos, No se ingreso el usuario");
									 console.log(result);
								 }

							 },
							 data:{
								 id_refrigerio:id_refrigerio,
								 id_jornada:id_jornada,
								 cedula:cedula,
								 nombre:nombre,
								 fecha_naci:fecha_nacimiento,
								 anios:edad,
								 meses:meses,
								 sexo:sexo,
								 talla:talla,
								 peso:peso,
								 torax:torax,
								 nivel:nivel,
								 alimentos_excluidos:alimentos_excluidos,
								 problemas_salud:problemas_salud,
								 alergias:alergias,
								 medicacion:medicacion,
								 pediatra:pediatra,
								 tel_pediatra:tel_pediatra,
								 perso_recibir_ninios:perso_recibir_niños,
								 tel_emergencia:tel_emergencia,
								 observaciones:observaciones,
								 centro_edu_anterior:centro_edu_anterior,
								 //recaptcha:recaptcha,
								 id_periodo:$scope.dispo_matri[0].ID_PERIODO
							 },
							 type:"GET"
						 });

					 }else {
						 swal("Error!", "La cedula esta incorrecta!", "error");
					 }


				 }else {
					 swal("Alerta!", "La edad exede para ingresar al nivel 1 "+edad_niño, "warning");
				 }


			 }else
			 {
				 swal("Alerta!", "No tiene la minima edad para ingresar a Nivel 1 " +edad_niño, "warning");
			 }
		 }

		 if(nivel == 2)
		 {
			 if(((edad_max == 3)&&(meses_max >= 0)&&(dias_max>=0))||(edad_max>3))
			 {

				 if((edad_max<4)&&(meses_max<=12)&&(dias_max<=31))
				 {
					 if($scope.validar_cedula(cedula) == 1) {

// funcion para enviar datos al archivo php y devuelve un valor string
						 $.ajax({

							 url:"php/modificar.php",
							 success:function(result) //devuelve el resultado desde php
							 {
								 //alert(result);
								 if (result =="true")
								 {


									 $("#btncancelar").hide();
									 $("#btnmodificar").hide();
									 $("#btnsiguiente").show();
									 $("#resultado").html("<div style = 'background:green' class='text-1'> Su solicitud fue enviada correctamente</div>");
									 //alert("El Usuario ya se encuentra registrado");
									 $.ajax({

										 url:"php/consultar_cedula.php",
										 success:function(result) //devuelve el resultado desde php
										 {


											 window.localStorage["estudiante1"]= JSON.stringify(JSON.parse(result));


										 },
										 data:{

											 cedula:cedula

										 },
										 type:"GET"
									 });

								 }
								 if(result =="false")
								 {

									 //alert("Registro Exitoso");
									 $("#resultado").html("<div style = 'background:red' class='text-1'>Error al enviar la solicitud</div>");

								 }
								 if((result != "true")&&(result !="false"))
								 {
									 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
									 alert("Error en la base de datos, No se ingreso el usuario");
									 console.log(result);
								 }

							 },
							 data:{
								 id_refrigerio:id_refrigerio,
								 id_jornada:id_jornada,
								 cedula:cedula,
								 nombre:nombre,
								 fecha_naci:fecha_nacimiento,
								 anios:años,
								 meses:meses,
								 sexo:sexo,
								 talla:talla,
								 peso:peso,
								 torax:torax,
								 nivel:nivel,
								 alimentos_excluidos:alimentos_excluidos,
								 problemas_salud:problemas_salud,
								 alergias:alergias,
								 medicacion:medicacion,
								 pediatra:pediatra,
								 tel_pediatra:tel_pediatra,
								 perso_recibir_ninios:perso_recibir_niños,
								 tel_emergencia:tel_emergencia,
								 observaciones:observaciones,
								 centro_edu_anterior:centro_edu_anterior,
								 //recaptcha:recaptcha,
								 id_periodo:$scope.dispo_matri[0].ID_PERIODO
							 },
							 type:"GET"
						 });
					 }else {
						 swal("Error!", "La cedula esta incorrecta!", "error");
					 }


				 }else {
					 swal("Alerta!", "La edad exede para el Nivel 2 (3-4)años "+edad_niño, "warning");
				 }




			 }else
			 {
				 swal("Alerta!", "No tiene la minima edad para ingresar a NIvel 2 (3-4)años "+edad_niño, "warning");
			 }
		 }

		 if(nivel == 3)
		 {
			 if(((edad_max == 4)&&(meses_max >= 0)&&(dias_max>=0))||(edad_max>4))
			 {

				 if((edad_max<5)&&(meses_max<=12)&&(dias_max<=31))
				 {
					 if($scope.validar_cedula(cedula) == 1) {

// funcion para enviar datos al archivo php y devuelve un valor string
						 $.ajax({

							 url:"php/modificar.php",
							 success:function(result) //devuelve el resultado desde php
							 {
								 //alert(result);
								 if (result =="true")
								 {


									 $("#btncancelar").hide();
									 $("#btnmodificar").hide();
									 $("#btnsiguiente").show();
									 $("#resultado").html("<div style = 'background:green' class='text-1'> Su solicitud fue enviada correctamente</div>");
									 //alert("El Usuario ya se encuentra registrado");
									 $.ajax({

										 url:"php/consultar_cedula.php",
										 success:function(result) //devuelve el resultado desde php
										 {


											 window.localStorage["estudiante1"]= JSON.stringify(JSON.parse(result));


										 },
										 data:{

											 cedula:cedula

										 },
										 type:"GET"
									 });

								 }
								 if(result =="false")
								 {

									 //alert("Registro Exitoso");
									 $("#resultado").html("<div style = 'background:red' class='text-1'>Error al enviar la solicitud</div>");

								 }
								 if((result != "true")&&(result !="false"))
								 {
									 $("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
									 alert("Error en la base de datos, No se ingreso el usuario");
									 console.log(result);
								 }

							 },
							 data:{
								 id_refrigerio:id_refrigerio,
								 id_jornada:id_jornada,
								 cedula:cedula,
								 nombre:nombre,
								 fecha_naci:fecha_nacimiento,
								 anios:años,
								 meses:meses,
								 sexo:sexo,
								 talla:talla,
								 peso:peso,
								 torax:torax,
								 nivel:nivel,
								 alimentos_excluidos:alimentos_excluidos,
								 problemas_salud:problemas_salud,
								 alergias:alergias,
								 medicacion:medicacion,
								 pediatra:pediatra,
								 tel_pediatra:tel_pediatra,
								 perso_recibir_ninios:perso_recibir_niños,
								 tel_emergencia:tel_emergencia,
								 observaciones:observaciones,
								 centro_edu_anterior:centro_edu_anterior,
								 //recaptcha:recaptcha,
								 id_periodo:$scope.dispo_matri[0].ID_PERIODO
							 },
							 type:"GET"
						 });
					 }else {
						 swal("Error!", "La cedula esta incorrecta!", "error");
					 }

				 }else {
					 swal("Alerta!", "La edad exede para el Nivel 2 (3-4)años "+edad_niño, "warning");
				 }

			 }else
			 {
				 swal("Alerta!", "No tiene la minima edad para ingresar a NIvel 2 (3-4)años "+edad_niño, "warning");
			 }
		 }


    }

 $scope.escogerOpcion = function () {

 	var op = $('#sel1').val();
 	console.log(op);

 	if (op=="Cédula")
 	{
 		$("#cedula").show();
		$("#nombre").hide();




 	}else
 	{
 		$("#cedula").hide();
		$("#nombre").show();
 	}



 }


$scope.imprimir = function () {

$scope.estu=  JSON.parse(localStorage.getItem("estudiante"));

    var cedula = $scope.estu.CEDULA;
	var nombre = $scope.estu.NOMBRE;
	var fecha_naci = $scope.estu.FECHA_NACIMIENTO;
	var años = $scope.estu.ANIOS;
	var meses = $scope.estu.MESES;
	var sexo = $scope.estu.SEXO;
	var talla = $scope.estu.TALLA;
	var peso = $scope.estu.PESO;
	var torax = $scope.estu.TORAX;
	var id_jornada = $scope.estu.ID_JORNADA;
	var nivel = "NIVEL"
	var id_refrigerio = $scope.estu.ID_REFRIGERIO;
	var alimentos_excluidos = $scope.estu.ALIMENTOS_EXCLUIDOS;
	var problemas_salud = $scope.estu.PROBLEMAS_SALUD;
	var alergias = $scope.estu.ALERGIAS;
	var medicacion = $scope.estu.MEDICACION;
	var pediatra = $scope.estu.PEDIATRA;
	var tel_pediatra = $scope.estu.TEL_PEDIATRA;
	var perso_recibir_niños = $scope.estu.PERSO_RECIBIR_NINO;
	var tel_emergencia = $scope.estu.TEL_EMERGENCIA;
	var observaciones = $scope.estu.OBSERVACIONES;
	var centro_edu_anterior = $scope.estu.CENTRO_EDU_ANTERIOR;

console.log(cedula);
          	////--------Datos Obtenidos desde el html
	var cedulapa = $('#textcedulapa').val();
	var nombrepa = $('#textnombrepa').val();
	var lugartrapa = $('#textlugar_trapa').val();
	var  direccion_trapa= $('#textdir_trapa').val();  
	var telefonopa = $('#texttel_pa').val();
	var emailpa = $('#textemail_pa').val();
	var domiciliopa = $('#textdir_do_pa').val();
	var tipo_vipa = document.getElementById("viviendapa").value;
	var teauxpa = $('#texttel_aux_pa').val();
	var id_tipopa = 1;
	
	var cedulama = $('#textcedulama').val();
	var nombrema = $('#textnombrema').val();
	var lugartrama = $('#textlugar_tra_ma').val();
	var  direccion_trama = $('#textdir_tra_ma').val();
	var telefonoma = $('#texttel_ma').val();
	var emailma = $('#textemail_ma').val();
	var domicilioma = $('#textdir_do_ma').val();
	var tipo_vima = document.getElementById("viviendama").value;
	var teauxma = $('#texttel_aux_ma').val();
	var id_tipoma = 2;
 	

 	$.ajax({

		url:"fpdf/imprimirformulario.php",
		success:function(result) //devuelve el resultado desde php
		{
				console.log(result);				
								
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
			nivel:nivel,
			alimentos_excluidos:alimentos_excluidos,
			problemas_salud:problemas_salud,
			alergias:alergias,
			medicacion:medicacion,
			pediatra:pediatra,
			tel_pediatra:tel_pediatra,
			perso_recibir_ninios:perso_recibir_niños,
			tel_emergencia:tel_emergencia,
			observaciones:observaciones,
			centro_edu_anterior:centro_edu_anterior,

			cedulapa:cedulapa,
			nombrepa:nombrepa, 
			lugartrapa:lugartrapa, 
			direccion_trapa:direccion_trapa, 
			telefonopa:telefonopa, 
			emailpa:emailpa, 
			domiciliopa:domiciliopa, 
			tipo_vipa:tipo_vipa, 
			teauxpa:teauxpa, 
			id_tipopa:id_tipopa, 
										
			cedulama:cedulama, 
			nombrema:nombrema, 
			lugartrama:lugartrama,
			direccion_trama:direccion_trama,
			telefonoma:telefonoma,
			emailma:emailma ,
			domicilioma:domicilioma, 
			tipo_vima:tipo_vima, 
			teauxma:teauxma, 
			id_tipoma:id_tipoma
			//recaptcha:recaptcha,

			},
		type:"GET"
		});





 }



});


app.controller('contactosController', function($scope, $http, $rootScope, $location,$localStorage){

	
        
    		
          $scope.inicializar = function () {

          
         
    }

       $scope.enviar_email = function () {

       	var nombre = $('#Nom_usuario').val();
		var mail = $('#Nom_mail').val();
		var telefono = $('#Nom_telefono').val();
		var mensaje = $('#Nom_mensaje').val();
		var recaptcha = $('#g-recaptcha-response').val();

		$.ajax({

		url:"php/enviar_mail.php",
		success:function(result) //devuelve el resultado desde php
		{
			alert(result); 
			if (result =="true")
			{

				
				$("#confirmacion").html("<div style = 'background:green' class='text-1'> Su solicitud fue enviada correctamente</div>");
				//alert("El Usuario ya se encuentra registrado");
				
			}
			if(result =="false")
			{
				
				//alert("Registro Exitoso");
				$("#confirmacion").html("<div style = 'background:red' class='text-1'>Error al enviar la solicitud</div>");
				
			}
			if((result != "true")&&(result !="false"))
			{
				$("#confirmacion").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				//alert("Error en la base de datos, No se ingreso el usuario");
				console.log(result);
			}
			
		},
		data:{ 
			nombre:nombre,
			email:mail,
			telefono:telefono,
			mensaje:mensaje,
			recaptcha:recaptcha

		},
		type:"GET"
	});
                  
    }
   
	});




app.controller('mostrarController', function($scope, $http, $rootScope, $location,$localStorage){

	       	 
		
		$scope.Noticia=  JSON.parse(localStorage.getItem("noticia"));
		$scope.estudiante=  JSON.parse(localStorage.getItem("estudiante"));
		console.log($scope.estudiante);
		
		
	
   

	});





