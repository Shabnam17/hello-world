var employeeApp = angular.module('empApp',[]);
employeeApp.controller('empCtrl', function($scope){

$scope.employees = [{name : 'Shreya', company : 'UST'},{name : 'Yesh', company :'ORACLE'},{name : 'Tom', company :'Infy'},{name : 'Arya', company :'UST'}]


});