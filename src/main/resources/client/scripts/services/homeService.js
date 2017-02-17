angular.module('app')
	.service('homeService',[ '$http', function ($http) {


	this.getNombreEnseignant = function(callback){
		var url = "/enseignant/nombre";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};


	this.getNombreFormation = function(callback){
		var url = "/formations/nombre";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};

}]);