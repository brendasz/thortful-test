angular.module('nameSearch', [])

.filter('filterName', function(){

	return function(names, filterText){

		if(!filterText){
			return names;
		}

		var result = [];

		filterText = filterText.toLowerCase();

		angular.forEach(names, function(element){

			if(element.name.toLowerCase().indexOf(filterText) > -1){
				result.push(element);
			}

		});

		return result;
	};

})

.controller('NameSearchController', ['$scope', '$http', function NameSearchController($scope, $http){

  $http({
    method: 'GET',
    url: 'names.json'
 }).then(function (names){
    $scope.elements = names.data;
 });

}]);
