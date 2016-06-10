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
    .state('screens',{
      url:'/screens',
      templateUrl:'partials/screens-list.html',
      controller:'ScreensListController'
    })
    //add viewScreen, newScreen, editScreen (DELETE THIS LINE WHEN FINISHED)
    
     
    // States for Services
    .state('services',{
        url:'/services',
        templateUrl:'partials/services-list.html',
        controller:'ServicesListController'
    })
    //add viewService, newService, editService (DELETE THIS LINE WHEN FINISHED)
   
    
    .state("otherwise", {
        url: "*path",
        templateUrl: "partials/error-data.html"
    });
}).run(function($state){
   $state.go('flows');
});
