angular.module('protometheusApp.controllers',[])

//Flow Controllers
.controller('FlowListController',function($scope,$state,$stateParams,popupService,$window,FlowFactory){

    $scope.flows=FlowFactory.query();

    $scope.deleteFlow=function(flow){
        if(popupService.showPopup('Really delete this?')){
            flow.$delete(function(){
                $state.transitionTo($state.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            });
        }
    }

}).controller('FlowViewController',function($scope,$stateParams,FlowFactory){

    $scope.flow=FlowFactory.get({flowID:$stateParams.flowID});

}).controller('FlowCreateController',function($scope,$state,$stateParams,FlowFactory){

    $scope.flow=new FlowFactory();

    $scope.addFlow=function(){
        $scope.flow.$save(function(){
            $state.go('flows');
        });
    }
}).controller('FlowEditController',function($scope,$state,$stateParams,FlowFactory){

    $scope.updateFlow=function(){
        $scope.flow.$update(function(){
            $state.go('flows');
        });
    };

    $scope.loadFlow=function(){
        $scope.flow=FlowFactory.get({flowID:$stateParams.flowID});
    };

    $scope.loadFlow();
})


//Screens Controllers
.controller('ScreensListController',function($scope,$stateParams,ScreensFactory){
//This is a placeholder. Code to follow
})
//Add List, View, Create, Edit Controllers (DELETE THIS LINE WHEN FINISHED)


//Services Controllers
.controller('ServicesListController',function($scope,$stateParams,ServicesFactory){
    //This is a placeholder. Code to follow
});
//Add List, View, Create, Edit Controllers (DELETE THIS LINE WHEN FINISHED)