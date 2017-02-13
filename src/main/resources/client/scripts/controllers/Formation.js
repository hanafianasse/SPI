'use strict';

angular.module('app')
  .controller('FormationMainCtrl', ['$scope','ServiceFormation',function ($scope, ServiceFormation) {

	$scope.formations = [];
	ServiceFormation.getAllFormation(function (data) {
		$scope.formations = data;
	});
	
}]);