angular.module('protometheusApp.services',[]).factory('Movie',function($resource){
    return $resource('https://e23jsymsh0.execute-api.us-east-1.amazonaws.com/dev/api/movie/id/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});