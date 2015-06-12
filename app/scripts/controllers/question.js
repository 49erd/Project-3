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
      { id:1, content: "What is the meaning of life?", imageUrl: "http://ranger.gamebanana.com/img/ico/sprays/kitten2_render.png"},
      { id:2, content: "Who are we? Where did we come from? Where are we going?", imageUrl: "https://pbs.twimg.com/profile_images/598045334527315969/PanhoiU8.jpg" },
      { id:3, content: "Where is my mind?", imageUrl: "http://myhswm.org/images/sized/images/animals/Oprah5_C158-15-256x256.jpg" }
    ]
  	$scope.createPost = function () {
  		var idNum = $scope.questions.length;
  		$scope.questions.push({ id: idNum, content: $scope.question.content, imageUrl: $scope.question.img_url });
      $scope.question.content = "";
      $scope.question.img_url = "";
  	}
  }]);
