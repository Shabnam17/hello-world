
var appHere = angular.module("myApp",[]);
appHere.controller("HelloController", function($scope){
	$scope.message= " World!";
$scope.place = "trivandrum";
 $scope.names = ["Emil", "Tobias", "Linus"];
 $scope.count = 0;
 var a =9;
    $scope.myFunc = function() {
      return $scope.count++;
    };
		$scope.salary = 1234;
	var jsonObj = {name 'Raj', place:'TVM'};
	
	$scope.print = function(){
	return jsonObj.name +" stays at "+jsonObj.place;
	}
});

appHere.controller("ctrl1", function($scope){
console.log('Outer controller');
});			
appHere.controller("ctrl2", function($scope){
console.log('Inner controller');
$scope.today = new Date();
});			
