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

        $http.post('http://13.67.221.169:3000/api/contacto',obj)
            .success(function (data) {

                console.log(data);

$scope.mensaje="datos ingresados correctamente,Gracias por comunicarse con nosotros!"

            })




        $scope.nombres="";
            $scope.ciudad="";
            $scope.correo="";
            $scope.telefono="";
           $scope.observacion="";



    }







}]);



