'use strict';

angular.module('app')
	.factory('AuthService',['$http',function($http){
		return{
			authLocal : function(requestAuth){
				var config = {
					url : '/auth',
					method : "POST",
					data : requestAuth
				};
				return $http(config);
			},
			getUser : function(){
				var config = {
					url : '/user',
					method : 'GET'
				};
				return $http(config);
			},
			deconnexion : function(){
				var config = {
					url : '/deconnexion',
					method : "GET"
				};
				return $http(config);
			}
		}
	}]);
	