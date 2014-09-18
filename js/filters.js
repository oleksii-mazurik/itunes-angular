'use strict';

/* Filters */

angular.module('searchFilters', []).filter('timeFilter', function() {
  return function(input) {
      var minutes = Math.floor(input / 1000 / 60);
      var seconds = ((Math.round(input / 1000)  - Math.floor(input / 1000 / 60)*60) < 10 ? '0' : '') + (Math.round(input / 1000)  - Math.floor(input / 1000 / 60)*60);
      var trackTime = minutes.toString() + ':' + seconds.toString();
      return trackTime;
  };
});
