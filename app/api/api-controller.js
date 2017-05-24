(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').controller('ApiController', ApiController);

	ApiController.$inject = [ '$scope', '$location', '$uibModal', 'apiService'];

	function ApiController($scope, $location, $uibModal, apiService) {
		$scope.readJson = function() {
			console.log("Read JSON");
			apiService.loadJson().then(function(response) {
				console.log(response.data);
			});
			console.log("JSON loaded");
		};
	}
})(window.angular)