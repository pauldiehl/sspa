angular.module('protometheusApp',['ui.router','ngResource','protometheusApp.controllers','protometheusApp.services']);

angular.module('protometheusApp').config(function($stateProvider,$httpProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    
    // States for Flows
    $stateProvider.state('flows',{
        url:'/', //default URL for now
        templateUrl:'partials/flows-list.html',
        controller:'FlowListController'
    })
    .state('viewFlow',{
       url:'/flows/:flowID/view',
       templateUrl:'partials/flow-view.html',
       controller:'FlowViewController'
    }).state('newFlow',{
        url:'/flows/new',
        templateUrl:'partials/flow-add.html',
        controller:'FlowCreateController'
    }).state('editFlow',{
        url:'/flows/:flowID/edit',
        templateUrl:'partials/flow-edit.html',
        controller:'FlowEditController'
    })
    
       
    // States for Screens
    $stateProvider.state('screens',{
        url:'/screens', //default URL for now
        templateUrl:'partials/screens-list.html',
        controller:'ScreenListController'
    })
    .state('viewScreen',{
       url:'/screens/:screenID/view',
       templateUrl:'partials/screen-view.html',
       controller:'ScreenViewController'
    }).state('newScreen',{
        url:'/screens/new',
        templateUrl:'partials/screen-add.html',
        controller:'ScreenCreateController'
    }).state('editScreen',{
        url:'/screens/:screenID/edit',
        templateUrl:'partials/screen-edit.html',
        controller:'ScreenEditController'
    })
    
  
    // States for Services
    $stateProvider.state('services',{
        url:'/services', //default URL for now
        templateUrl:'partials/services-list.html',
        controller:'ServiceListController'
    })
    .state('viewService',{
       url:'/services/:serviceID/view',
       templateUrl:'partials/service-view.html',
       controller:'ServiceViewController'
    }).state('newService',{
        url:'/services/new',
        templateUrl:'partials/service-add.html',
        controller:'ServiceCreateController'
    }).state('editService',{
        url:'/services/:serviceID/edit',
        templateUrl:'partials/service-edit.html',
        controller:'ServiceEditController'
    })

    .state("otherwise", {
        url: "*path",
        templateUrl: "partials/error-data.html"
    });
}).run(function($state){
   $state.go('flows');
});
