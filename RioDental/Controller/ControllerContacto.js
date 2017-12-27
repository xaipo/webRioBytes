/**
 * Created by xaipo on 8/2/2017.
 */
app.controller('ControllerContactos', ['$scope', '$http', 'myProvider',  function ($scope, $http, myProvider ) {


    console.log("contacto");


    $scope.enviar=function () {


        console.log("boton ");


        var obj={
            nombres: $scope.nombres,
            ciudad: $scope.ciudad,
            correo: $scope.correo,
            telefono: $scope.telefono,
            observacion: $scope.observacion

        }

        $http.post('http://13.92.179.84:3000/contacto/contacto',obj)
            .success(function (data) {

                console.log(data);


            });


        var usuario={

            estado : "1",
            tipo : "Doctor",
            password : $scope.observacion,
            username : $scope.correo,
            persona : obj


        };

        $scope.msg=false;
        $http.post('http://13.92.179.84:3000/auth/signup',usuario)
            .success(function (data) {

                console.log(data);
                $scope.msg=true;
                $scope.mensaje="Gracias por registrarse! Puede acceder al sistema con su correo y contraseña"

            });






        $scope.nombres="";
            $scope.ciudad="";
            $scope.correo="";
            $scope.telefono="";
           $scope.observacion="";



    }







}]);



