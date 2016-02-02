var famHistory = angular.module('famHistory',[]);
famHistory.controller('nameAdder', function($scope) {
	$scope.todos = [];
	$scope.addToDo = function() {
		console.log("you clicked the button");
		var newItem = $scope.name + ', ' + $scope.father + ', ' + $scope.mother;
        	console.log(newItem);
		$scope.todos.push({text:newItem, done:false});
		$scope.name = "";
		$scope.father = "";
		$scope.mother = "";		
};
	$scope.removeDone = function() {
		var oldList = $scope.todos; 
		$scope.todos = [];
		angular.forEach(oldList, function(x) {
			if(!x.done) $scope.todos.push(x);
		});
	};
});
