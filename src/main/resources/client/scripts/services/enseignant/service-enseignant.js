'use strict';

angular.module('app')
	.service('ServiceEnseignant',[ '$http' ,'$location','$rootScope', function ($http,$location,$rootScope) {
	
	this.getAllEnseignant = function(callback){
		var url = "/enseignant";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};

	this.getOneEnseignant = function(noEnseignant, callback){
		var url = "/enseignant/"+noEnseignant;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
/*
	this.getLastEnseignant = function(callback){
		var url = "/enseignant";
		$http.get(url).then(function(response){
			for(var i = 0 ; i < response.data.length; i++){
				if(i == response.data.length-1){
					callback(response.data);
				}
			}
		});
	};*/

	this.deleteEnseignant = function(noEnseignant){
		var clientUrl = '/enseignant/delete/' + noEnseignant;
		var request = $http({
			method: "DELETE",
			url: clientUrl
		});
		request.success(
			function(response) {
				$location.path('/touslesEnseignants');
			}
		);
	};


	this.AjouterEnseignant = function(Enseignant){
		var clientUrl = '/enseignant/ajouter';
		var request = $http({
			method: "POST",
			url: clientUrl,
			data: Enseignant,
			dataType: "application/json;charset=utf-8"
		});
		request.success(
			function(response) {
				$location.path('/touslesEnseignants');
			}
		)
		request.error(function(response, status, headers, config) {
			$rootScope.$broadcast('showError', {
                data: response.message
            });
		});
	};


	this.updateEnseignant = function(Enseignant){
		var clientUrl = '/enseignant/update';
		var request = $http({
			method: "PUT",
			url: clientUrl,
			data: Enseignant
		});
		request.success(
			function(response) {
				$location.path('/touslesEnseignants');
			}
		);
	};


	



}]);