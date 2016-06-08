angular.module('movieApp',['ui.router','ngResource','movieApp.controllers','movieApp.services']);

angular.module('movieApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('movies',{
        url:'/movies',
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
    }).state("otherwise", {
        url: "*path",
        templateUrl: "partials/error-data.html"
    });
}).run(function($state){
   $state.go('movies');
}).state('screens',{
  url:'/screens',
  templateUrl:'partials/screens.html',
  controller:'screensViewController'
});
