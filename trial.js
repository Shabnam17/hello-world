var trialApp = angular.module("someApp",[]);

trialApp.controller("SomeController", function($scope, $timeout,$interval,$location){
$scope.myHeading ="Happy Christmas";
$scope.parameter =new Date().toLocaleTimeString();
$timeout(function(){
$scope.myHeading ="Happy New Year";
}, 1000);


$interval(function(){
$scope.parameter =new Date().toLocaleTimeString();
}, 2000);
$scope.myLocation = $location.absUrl();

$scope.call = function(){
     console.log(req.url);
};

$scope.mydata ={val :'jake'};
$scope.$watch('mydata.val' ,function(newval){
$scope.mydata.toolong =newval.length>15;
});
});