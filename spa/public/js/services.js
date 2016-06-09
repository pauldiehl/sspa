angular.module('protometheusApp.services',[])

//Flow API call
.factory('FlowFactory',function($resource){
    return $resource('https://e23jsymsh0.execute-api.us-east-1.amazonaws.com/dev/api/flow/flowID/:flowID',{flowID:'@flowID'},{
        update: {
            method: 'PUT'
        }
    });
})
//Screen API call
.factory('ScreenFactory',function($resource){
    return $resource('https://e23jsymsh0.execute-api.us-east-1.amazonaws.com/dev/api/screen/screenID/:screenID',{screenID:'@screenID'},{
        update: {
            method: 'PUT'
        }
    });
})
//Service API call
.factory('ServiceFactory',function($resource){
    return $resource('https://e23jsymsh0.execute-api.us-east-1.amazonaws.com/dev/api/service/serviceID/:serviceID',{serviceID:'@serviceID'},{
        update: {
            method: 'PUT'
        }
    });
})
//Additional Features
.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});