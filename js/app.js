'use strict';

/* App Module */

var searchApp = angular.module('searchApp', [
    'ngRoute',
    'searchControllers',
    'searchServices',
    'ui.bootstrap',
    'searchFilters'
]);



searchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/search', {
        templateUrl: 'partials/defaultView.html'
        }).
        when('/music', {
        templateUrl: 'partials/songsView.html'
        }).
        when('/tvShow', {
        templateUrl: 'partials/tvShowsView.html'
        }).
        when('/movie', {
            templateUrl: 'partials/moviesView.html'
        }).
        when('/podcast', {
            templateUrl: 'partials/podcastsView.html'
        }).
        when('/ebook', {
            templateUrl: 'partials/booksView.html'
        }).
        when('/musicVideo', {
            templateUrl: 'partials/musicVideosView.html'
        }).
        when('/software', {
            templateUrl: 'partials/softwareView.html'
        }).
        otherwise({
        redirectTo: '/search'
        });
  }]);
