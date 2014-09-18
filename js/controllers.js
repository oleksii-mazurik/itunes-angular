'use strict';

/* Controllers */

var searchControllers = angular.module('searchControllers', []);

searchControllers.controller('SearchCtrl', ['$scope', '$location','iTunesData', function($scope, $location, iTunesData){

    $scope.searchData = '';
    $scope.mediaType = 'all';
    $scope.country = 'us';

    $scope.results = [];

    $scope.visibleAdditionals = false;

    $scope.filteredResults = [];

    $scope.loading = false;

    $scope.toggle = function() {
        $scope.visibleAdditionals = !$scope.visibleAdditionals;
    };

    $scope.submit = function(type) {

        if (type == 'all') {
            type = 'music';
        }

        $scope.loading = true;
        iTunesData.doSearch($scope.searchData, type, $scope.country)
            .then(function(result){
                $scope.results = result.data.results;
                $scope.updateFilteredResults();
                $scope.loading = false;
                if ($scope.visibleAdditionals) {
                    $scope.toggle();
                }
                $scope.mediaType = 'all';
                $scope.country = 'us';
                $scope.currentPage = 1;
                $location.path('/' + type);
            });

    }

    $scope.currentPage = 1;
    $scope.numPerPage = 15;
    $scope.maxSize = 5;

    $scope.updateFilteredResults = function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
        var end = begin + $scope.numPerPage;
        $scope.filteredResults = $scope.results.slice(begin, end);
    }

}]);
