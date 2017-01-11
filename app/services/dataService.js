(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').service('DataService', DataService);
	DataService.$inject = ['$http'];

	function DataService($http) {
		this.load = function() {
			return $http({url: "data/cancom_output.json"});
		};
	}
})(window.angular)