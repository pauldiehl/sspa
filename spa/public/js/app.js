angular.module('chatApp',['ui.router','ngResource','chatApp.controllers','chatApp.services', 'chatApp.directives','chatApp.filters']);

angular.module('chatApp').config(function($stateProvider,$httpProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider.state('listings',{
        url:'/', //default URL for now
        templateUrl:'partials/listing-list.html',
        controller:'ListingsByUserController'
    })
    .state('viewListing',{
       url:'/listings/:hashid/:rangeid/view',
       templateUrl:'partials/listing-view.html',
       controller:'ListingViewController'
    }).state('newListing',{
        url:'/listings/new',
        templateUrl:'partials/listing-add.html',
        controller:'ListingCreateController'
    }).state('editListing',{
        url:'/listings/:hashid/:rangeid/edit',
        templateUrl:'partials/listing-edit.html',
        controller:'ListingEditController'
    })
    .state("otherwise", {
        url: "*path",
        templateUrl: "partials/error-data.html"
    });
}).run(function($state){
   $state.go('listings');
});
