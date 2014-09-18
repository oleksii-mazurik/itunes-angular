'use strict';

/* Services */

var searchServices = angular.module('searchServices', ['ngResource']);

searchServices.factory('iTunesData', ['$resource','$http',
  function($resource, $http){
      return {
          doSearch: function(sQuery, mediaType, country) {
              //return the promise directly.
              return $http.jsonp('http://itunes.apple.com/search', {
                  params: {
                      "callback": "JSON_CALLBACK",
                      "term": sQuery,
                      "media": mediaType,
                      "country": country,
                      "limit": 200
                  }
              });
          }
      }
  }]);
