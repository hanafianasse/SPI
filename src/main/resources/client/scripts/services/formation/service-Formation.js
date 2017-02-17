'use strict';

angular.module('app')
	.service('ServiceFormation',[ '$http' ,'$location','$rootScope', function ($http,$location,$rootScope) {
	this.getAllFormation = function(callback){
		var url = "/formations";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};

	this.deleteFormation = function(codeFormation){

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
		request.error(function(response, status, headers, config) {
			$rootScope.$broadcast('showError', {
                data: response.message
            });
		});
	};

}]);