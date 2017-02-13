'use strict';

angular.module('app')
	.service('ServiceFormation',[ '$http' , function ($http) {
	this.getAllFormation = function(callback){
		var url = "/formations";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};


	this.getOneFormation = function(codeFormation, callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
}]);