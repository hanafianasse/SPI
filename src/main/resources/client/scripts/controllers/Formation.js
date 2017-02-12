'use strict';

angular.module('app')
	.service('ServiceFormation',[ '$http' , function ($http) {
	this.getAllFormation = function(callback){
		var url = "/formations";
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
}]);

angular.module('app')
  .controller('FormationMainCtrl', ['$scope','ServiceFormation',function ($scope, ServiceFormation) {

	$scope.formations = [];
	ServiceFormation.getAllFormation(function (data) {
		$scope.formations = data;
	});
	
}]);