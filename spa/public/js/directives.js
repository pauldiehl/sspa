angular.module('chatApp.directives', [])


//http://www.cheynewallace.com/uploading-to-s3-with-angularjs/

// .directive('file', function() {
//   return {
//     restrict: 'AE',
//     scope: {
//       file: '@'
//     },
//     link: function(scope, el, attrs){
//       el.bind('change', function(event){
//         var files = event.target.files;
//         var file = files[0];
//         scope.file = file;
//         scope.$parent.file = file;
//         scope.$apply();
//       });
//     }
//   };
// });


//https://jsfiddle.net/JeJenny/ZG9re/
.directive('fileModel', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                    //console.log(scope.file);
                });
            });
        }
    };
});


//https://github.com/Serhioromano/angular-aws-s3-upload

//http://www.ryansouthgate.com/2015/12/24/upload-amazon-s3-using-angularjs/


// POC - 
// DYNAMO DB
// http://blog.michaelschmatz.com/2016/04/02/how-to-build-an-image-host-using-aws-lambda-s3-and-dynamo/