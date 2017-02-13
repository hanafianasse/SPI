'use strict';

angular.module('app')
  .controller('FormationUpdateCtrl', ['$scope','ServiceFormation','$http','$routeParams','$location',function ($scope,ServiceFormation,$http,$routeParams,$location) {
  	
  	var codeFormation = $routeParams.codeFormation;
  	ServiceFormation.getOneFormation(codeFormation,function (data) {
		$scope.formation = data;
	});

	$scope.updateFormation = function(){
		var clientUrl = '/formations/update';
		var request = $http({
			method: "PUT",
			url: clientUrl,
			data: $scope.formation
		});
		request.success(
			function(response) {
				$location.path('/touteslesFormations');
				console.log(response);
			}
		);
	}
	
}]);