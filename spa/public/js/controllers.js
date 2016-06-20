angular.module('protometheusApp.controllers',[])

//Flow Controllers
.controller('FlowListController',function($scope,$state,$stateParams,popupService,$window,FlowFactory,$http){

    $scope.flows =FlowFactory.query();

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

.controller('ScreenListController',function($scope,$state,$stateParams,popupService,$window,ScreenFactory){

    $scope.screens = ScreenFactory.query();

    $scope.deleteScreen=function(screen){
        if(popupService.showPopup('Really delete this?')){
            screen.$delete(function(){
                $state.transitionTo($state.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            });
        }
    }
    
}).controller('ScreenViewController',function($scope,$stateParams,ScreenFactory){

    $scope.screen=ScreenFactory.get({screenID:$stateParams.screenID});

}).controller('ScreenCreateController',function($scope,$state,$stateParams,ScreenFactory){

    $scope.screen=new ScreenFactory();

    $scope.addScreen=function(){
        $scope.screen.$save(function(){
            $state.go('screens');
        });
    }
}).controller('ScreenEditController',function($scope,$state,$stateParams,ScreenFactory){

    $scope.updateScreen=function(){
        $scope.screen.$update(function(){
            $state.go('screens');
        });
    };

    $scope.loadScreen=function(){
        $scope.screen=ScreenFactory.get({screenID:$stateParams.screenID});
    };

    $scope.loadScreen();
})


//Services Controllers
.controller('ServiceListController',function($scope,$state,$stateParams,popupService,$window,ServiceFactory){

    $scope.services = ServiceFactory.query();

    $scope.deleteService=function(service){
        if(popupService.showPopup('Really delete this?')){
            service.$delete(function(){
                $state.transitionTo($state.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            });
        }
    }
    
}).controller('ServiceViewController',function($scope,$stateParams,ServiceFactory){

    $scope.service=ServiceFactory.get({serviceID:$stateParams.serviceID});

}).controller('ServiceCreateController',function($scope,$state,$stateParams,ServiceFactory){

    $scope.service=new ServiceFactory();

    $scope.addService=function(){
        $scope.service.$save(function(){
            $state.go('services');
        });
    }
}).controller('ServiceEditController',function($scope,$state,$stateParams,ServiceFactory){

    $scope.updateService=function(){
        $scope.service.$update(function(){
            $state.go('services');
        });
    };

    $scope.loadService=function(){
        $scope.service=ServiceFactory.get({serviceID:$stateParams.serviceID});
    };

    $scope.loadService();
});