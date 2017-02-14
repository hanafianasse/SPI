'use strict';

angular.module('app')
	.service('ServiceFormation',[ '$http' ,'$location', function ($http,$location) {
	this.getAllFormation = function(callback){
		var url = "/formations";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};

	this.deleteFormation = function(codeFormation){
/*
		$http.delete("formations/delete/" + codeFormation).then(function(){
			$location.path('/touteslesFormations');
		},function(erreur){
			alert("Erreur coté serveur" + erreur.data + "ffsdd" );
		});
		*/
		var clientUrl = '/formations/delete';
		var request = $http({
			method: "DELETE",
			url: clientUrl,
			data: codeFormation
		});
		request.success(
			function(response) {
				$location.path('/touteslesFormations');
			}
		);
	};


	this.getOneFormation = function(codeFormation, callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};


	this.updateFormation = function(formation){
		var clientUrl = '/formations/update';
		var request = $http({
			method: "PUT",
			url: clientUrl,
			data: formation
		});
		request.success(
			function(response) {
				$location.path('/touteslesFormations');
			}
		);
	};

	this.ajouterFormation = function(formation){
		var clientUrl = '/formations/ajouter';
		var request = $http({
			method: "POST",
			url: clientUrl,
			data: formation,
			dataType: "application/json;charset=utf-8"
		});
		request.success(
			function(response) {
				$location.path('/touteslesFormations');
			}
		)
		request.error(function(data, status, headers, config) {
			console.log("saved comment"+ data);
		})
	};

}]);