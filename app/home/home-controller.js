(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').controller('HomeController', HomeController);

	HomeController.$inject = [ '$scope', '$location', '$uibModal', 'DataService'];

	function HomeController($scope, $location, $uibModal, DataService) {
		$scope.readJson = function() {
			console.log("Read JSON");
			DataService.load().then(function(response) {
				console.log(response.data);
			});
			console.log("JSON loaded");
		};
	}
})(window.angular)