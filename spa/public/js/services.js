angular.module('chatApp.services',[])

//API call
.factory('Factory',function($resource){
    return $resource('https://44hm7wx658.execute-api.us-east-1.amazonaws.com/dev/cpk/:table/:hash/:range/:hashid/:rangeid',
    {
        table:'@table',
        hash:'@hash', 
        range:'@range',
        hashid:'@hashid',
        rangeid:'@rangeid' 
    },
    {
      update: {
          method: 'PUT',
          params: {
            table:'@table',
            hash:'@hash', 
            range:'@range',
            hashid:'@hashid',
            rangeid:'@rangeid' 
        },
      }
    });
})

.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
})

.service('models',function(){
    this.listings = 
        {
            table:'listings',
            hash:'uuid',
            range:'createdDatetime'
        }
});