'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", [])




        /*$provide.factory("ApiUrl", function () {
            return {
                urlUsuarios: 'http://localhost:3000/api/usuarios'
            };
        })*/

        //$provide.value('urlUsuarios', 'http://localhost:3000/api/usuarios');


	     function ApiUrl(){

	    this.getEstudiante=function(){
	        return 'http://localhost:3000/api/estudiante';
	    }
	    this.getNoticias=function(){
	        return 'http://localhost:3000/api/noticias';
	    }
	    
	};


	app.factory("myProvider",function(){
   // console.log("factory function");
    return new ApiUrl();

   });



//('urlUsuarios', 'http://localhost:3000/api/usuarios');



    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/
