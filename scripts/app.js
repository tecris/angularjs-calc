(function() {
 var app = angular.module('mathsBasics', []);

 app.controller('AdditionController', ['$scope', '$log', function($scope, $log) {

  $scope.$log = $log;
  $scope.exercises = [];
  $scope.historySize = 10;
  $scope.totalExercises = 0;
  $scope.correctExercises = 0;

  $scope.check = function($event) {
   console.log("Key - event");

   var keyCode = $event.which || $event.keyCode;
   if (keyCode === 13) {
   $scope.totalExercises++;
    console.log("Checking answer");
    if ($scope.answer == $scope.numberOne + $scope.numberTwo) {
     $scope.correctExercises ++;
     $scope.addExercise();
     $scope.reset();
    } else {
     $scope.showUserFeedback = true;
     $scope.feedback = "Incorrect";
    }
    $log.log("Total exercises = " + $scope.totalExercises);
   }
  };

  $scope.addExercise = function() {
   var newExercise = {};
   newExercise.sign = '+';
   newExercise.numberOne = $scope.numberOne;
   newExercise.numberTwo = $scope.numberTwo;
   newExercise.answer = $scope.answer;
   $scope.exercises.splice(0, 0, newExercise);
   $scope.exercises.splice(11, 1);
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

 }]);

})();
