angular.module('chatApp.filters', [])

.filter('unsafe', function($sce) { return $sce.trustAsHtml; });