(function() {
	'use strict';
	angular.module('MinimalNpmApp').controller('HomeController', HomeController)
			.directive('hidden', function() {
				return {
					link : function(scope, element) {
						$(element).hide();
					}
				}
			});

	HomeController.$inject = [ '$scope','$cookies', '$location', '$uibModal', '$http'];

	function HomeController($scope, $cookies, $location, $uibModal, $http) {
		var ctrl = this;
		$scope.events = [];
	}

})();
