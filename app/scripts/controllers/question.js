'use strict';

/**
 * @ngdoc function
 * @name selfTeachApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the selfTeachApp
 */
angular.module('selfTeachApp')
  .controller('QuestionCtrl', [ '$scope', function ($scope) {
  	$scope.questions = [
      { id:1, content: "What is the meaning of life?" },
      { id:2, content: "Who are we? Where did we come from? Where are we going?" },
      { id:3, content: "Where is my mind?" }
    ]
  	$scope.createPost = function () {
  		var idNum = $scope.questions.length;
  		$scope.questions.push({ id: idNum, content: $scope.question.content });
  	}
  }]);
