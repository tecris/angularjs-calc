(function() {
 var app = angular.module('mathsBasics', []);

 app.controller('AdditionController', ['$scope', '$log', function($scope, $log) {

  $scope.$log = $log;
  $scope.exercises = [];

  $scope.check = function($event) {
   console.log("Key-press");
   var keyCode = $event.which || $event.keyCode;
   if (keyCode === 13) {
    console.log("checking result");
    if ($scope.result == $scope.numberOne + $scope.numberTwo) {
     $scope.resultCorrect = "Correct";
     $scope.addExercise();
     $scope.reset();
    } else {
     $scope.showUserFeedback = true;
     $scope.resultCorrect = "Incorrect";
    }
   }
  };

  $scope.addExercise = function() {
   var newExercise = {};
   newExercise.name = $scope.numberOne;
   newExercise.title = $scope.numberTwo;
   $scope.exercises.push(newExercise);
   console.log($scope.exercises);
  };

  $scope.reset = function() {
   $scope.numberOne = $scope.random();
   $scope.numberTwo = $scope.random();
   $scope.result = "";
   $scope.showUserFeedback = false;
  };

  $scope.random = function() {
   return Math.floor((Math.random() * 10) + 1);
  };

  $scope.reset();

  $log.log("I am $log");
 }]);

})();
