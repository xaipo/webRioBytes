
angular.module('myApp', ['ngStorage']);

var app = angular.module("myApp", []);
var server='localhost';

function ApiUrl(){


    this.getPersonalesMany=function(){
        return 'http://'+server+':3000/api/apiManyPersonales';
    }

}

app.factory("myProvider",function(){
    // console.log("factory function");
    return new ApiUrl();

});





