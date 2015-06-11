'use strict';

/**
 * @ngdoc function
 * @name selfTeachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the selfTeachApp
 */
angular.module('selfTeachApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
