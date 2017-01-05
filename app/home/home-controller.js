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

	HomeController.$inject = [ '$scope', '$location', '$uibModal', '$http'];

	function HomeController($scope, $location, $uibModal, $http) {
		var ctrl = this;
		$scope.events = [];
	}

})();
