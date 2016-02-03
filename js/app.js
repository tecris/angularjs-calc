(function() {
 var app = angular.module('mathsBasics', []);

 app.controller('AdditionController', ['$scope', '$log', function($scope, $log) {

  $scope.$log = $log;
  $scope.exercises = [];
  $scope.historySize = 10;

  $scope.check = function($event) {
   console.log("Key-press");
   var keyCode = $event.which || $event.keyCode;
   if (keyCode === 13) {
    console.log("Checking answer");
    if ($scope.answer == $scope.numberOne + $scope.numberTwo) {
     $scope.addExercise();
     $scope.reset();
    } else {
     $scope.showUserFeedback = true;
     $scope.feedback = "Incorrect";
    }
   }
  };

  $scope.addExercise = function() {
   var newExercise = {};
   newExercise.sign = '+';
   newExercise.numberOne = $scope.numberOne;
   newExercise.numberTwo = $scope.numberTwo;
   newExercise.answer = $scope.answer;
   $scope.exercises.splice(0, 0, newExercise);
   console.log($scope.exercises);
  };

  $scope.reset = function() {
   $scope.numberOne = $scope.random();
   $scope.numberTwo = $scope.random();
   $scope.answer = "";
   $scope.showUserFeedback = false;
  };

  $scope.random = function() {
   return Math.floor((Math.random() * 10) + 1);
  };

  $scope.reset();

  $log.log("I am $log");
 }]);

})();
