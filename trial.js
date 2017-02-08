var trialApp = angular.module("someApp",[]);

trialApp.controller("SomeController", function($scope, $timeout,$interval,$location,$http){
$scope.myHeading ="Happy Christmas";
$scope.parameter =new Date().toLocaleTimeString();
  $timeout(function(){
  $scope.myHeading ="Happy New Year";
  }, 1000);


  $interval(function(){
  $scope.parameter =new Date().toLocaleTimeString();
  }, 2000);


$scope.myLocation = $location.absUrl();

$scope.mydata ={val :'jake'};
$scope.$watch('mydata.val' , function(newval){
$scope.mydata.toolong =newval.length>15;
});


$http({
  method: 'GET',
  url: 'https://api.github.com/users/pedrozath/repos'
}).then(function successCallback(response) {

 $scope.resName = response.data[0].name;
 $scope.x = response.data;
}, function errorCallback(response) {
    console.log("errorCallback");
});

});
