'use strict';

angular.module('app')
	.service('ServiceFormation3',[ '$http','$routeParams', function ($http,$routeParams) {
	var codeFormation = $routeParams.codeFormation;
	this.getOneFormation = function(callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
}]);

angular.module('app')
  .controller('FormationUpdateCtrl', ['$scope','ServiceFormation3',function ($scope, ServiceFormation3) {

  	alert('je suis la');

  	ServiceFormation3.getOneFormation(function (data) {
		$scope.formation = data;
	});
	
}]);