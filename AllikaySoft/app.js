/**
 * Created by xaipo on 8/2/2017.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", [])
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





