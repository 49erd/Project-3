'use strict';

/**
 * @ngdoc function
 * @name selfTeachApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the selfTeachApp
 */
angular.module('selfTeachApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
