angular.module('protometheusApp',['ui.router','ngResource','protometheusApp.controllers','protometheusApp.services']);

angular.module('protometheusApp').config(function($stateProvider,$httpProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider.state('movies',{
        url:'/',
        templateUrl:'partials/movies.html',
        controller:'MovieListController'
    }).state('viewMovie',{
       url:'/movies/:id/view',
       templateUrl:'partials/movie-view.html',
       controller:'MovieViewController'
    }).state('newMovie',{
        url:'/movies/new',
        templateUrl:'partials/movie-add.html',
        controller:'MovieCreateController'
    }).state('editMovie',{
        url:'/movies/:id/edit',
        templateUrl:'partials/movie-edit.html',
        controller:'MovieEditController'
    }).state('services',{
        url:'/services',
        templateUrl:'partials/services.html',
        controller:'servicesViewController'
    }).state('screens',{
      url:'/screens',
      templateUrl:'partials/screens.html',
      controller:'screensViewController'
    }).state("otherwise", {
        url: "*path",
        templateUrl: "partials/error-data.html"
    });
}).run(function($state){
   $state.go('movies');
});
