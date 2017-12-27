

var app = angular.module("myApp", []);
var server='13.92.179.84';

function ApiUrl(){


    this.getPersonalesMany=function(){
        return 'http://'+server+':3000/contacto/apiManyPersonales';
    }

}



app.factory("myProvider",function(){
    // console.log("factory function");
    return new ApiUrl();

});
