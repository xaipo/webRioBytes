app.controller('estudianteController', ['$scope', '$http','myProvider',  function ($scope,$http,myProvider)  {


	 $scope.nombre;
     $scope.respuesta;
	 $scope.inicializar = function(){
	  		
	  		

            var url = "http://localhost:3000/api/obtener?name=" + $scope.nombre
            //console.log(url);
            $http.get(url)
                .then(function (response) {

                    $scope.respuesta = response.data})

    }

     $scope.noticias = function(){
            
            

            $http.get("http://localhost/Pekelandia/php/consulta.php")
            .then(function (response) {

                $scope.listNoticias = response.data;
                console.log($scope.listNoticias);
          
            }, function errorCallback(response) {
            
                console.log(response);
            });

    }


     $scope.post = function(){
	  		
	  		

            var url = "http://localhost:3000/api/mensaje"
            //console.log(url);
            $http.post(url)
                .then(function (response) {

                    $scope.respuesta = response.data})

    }

    $scope.save = function (){


        $http({
            method: 'POST',
            url: "http://localhost:3000/api/mensaje",
            data:{
                name : $scope.nombre
            }
        }).then(function (response) {

                    $scope.respuesta = response.data})

    }
	  


}]);
