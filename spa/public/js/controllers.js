angular.module('chatApp.controllers',[])

//Listing Controllers
.controller('LiveListingsListController',function($scope,$state,$stateParams,popupService,$window,Factory,models){

    var model = Object.assign({},models.listingsIndex);

    $scope.listings = Factory.query();
    
})

.controller('ListingsByUserController',function($scope,$state,$stateParams,popupService,$window,Factory,models){

    $scope.listings = Factory.query(models.listings);
    //add hashid to grab listings by User
    
})

.controller('ListingViewController',function($scope,$state,$stateParams,Factory,popupService,$window,models){
    
    var model = Object.assign({},models.listings);
    model.hashid = $stateParams.hashid;
    model.rangeid = $stateParams.rangeid;
    
    $scope.listing=Factory.get(model);
    
    $scope.deleteListing=function(listing){
        model.hashid = listing.uuid;
        model.rangeid = listing.createdDatetime;
        if(popupService.showPopup('Really delete this?')){
            listing.$delete(model, function(){
                $state.go('listings')
            });
        }
    }
    
})

.controller('ListingCreateController',function($scope,$state,Factory,models){

    $scope.listing=new Factory();

    $scope.addListing=function(){
        $scope.listing.$save(models.listings, function(){
            $state.go('listings');
        });
    }
    
})

.controller('ListingEditController',function($scope,$state,$stateParams,Factory,models){
    
    var model = Object.assign({},models.listings);
    model.hashid = $stateParams.hashid;
    model.rangeid = $stateParams.rangeid;
    
    $scope.updateListing=function(){
        $scope.listing.$update(model,function(){
            $state.go('listings');
        });
    };

    $scope.loadListing=function(){
        $scope.listing=Factory.get(model);
    };

    $scope.loadListing();
 
})







//PICTURE

// //Screens Controllers

// .controller('ScreenController', function($scope,$state,$stateParams,popupService,$window,ScreenFactory){

//     $scope.screens = ScreenFactory.query();

//     $scope.deleteScreen=function(screen){
//         if(popupService.showPopup('Really delete this?')){
//             screen.$delete(function(){
//                 $state.transitionTo($state.current, $stateParams, {
//                     reload: true,
//                     inherit: false,
//                     notify: true
//                 });
//             });
//         }
//     }

//     if($stateParams.id){
//          $scope.screen=ScreenFactory.get({screenID:$stateParams.screenID});
//     }
//     else {
//         $scope.screen=new ScreenFactory();
//     }
    

//     $scope.addScreen=function(){
//         $scope.screen.$save(function(){
//             $state.go('screens');
//         });
//     }

//     $scope.updateScreen=function(){
//         $scope.screen.$update(function(){
//             $state.go('screens');
//         });
//     };

//     $scope.loadScreen=function(){
//         $scope.screen=ScreenFactory.get({screenID:$stateParams.screenID});
//     };

//     $scope.loadScreen();

//   var creds = { bucket: 'protometheus-photos', access_key: 'AKIAJVHRGLPDK3R5P7FQ', secret_key: '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' };
  
//   $scope.sizeLimit      = 10585760; // 10MB in Bytes
//   $scope.uploadProgress = 0;

//   $scope.upload = function() {
//     AWS.config.update({ accessKeyId: creds.access_key, secretAccessKey: creds.secret_key });
//     AWS.config.region = 'us-east-1';
//     var bucket = new AWS.S3({ params: { Bucket: creds.bucket } });
    
//     var fileChooser = document.getElementById('file');
//     var file = fileChooser.files[0];
    
//     // Check that the user has specified a file to upload
//   if (!file) {
//     alert("You must choose a file to upload!");
//     return;
//   }

//   // Check the MIME type is an image
//   if (file.type.indexOf("image") == -1) {
//     alert("You may only upload images");
//     return;
//   }
  
//     if(file) {
//         // Perform File Size Check First
//         var fileSize = Math.round(parseInt(file.size));
//         // if (fileSize > $scope.sizeLimit) {
//         //   toastr.error('Sorry, your attachment is too big. <br/> Maximum '  + $scope.fileSizeLabel() + ' file attachment allowed','File Too Large');
//         //   return false;
//         // }
//         // Prepend Unique String To Prevent Overwrites
//         var uniqueFileName = $scope.uniqueString() + '-' + file.name;

//         var params = { Key: uniqueFileName, ContentType: file.type, Body: file, ServerSideEncryption: 'AES256' }; //ACL: 'public-read'

//         bucket.putObject(params, function(err, data) {
//           if(err) {
//             //toastr.error(err.message,err.code);
//             console.log(err);
//             return false;
//           }
//           else {
//             // Upload Successfully Finished
//             //toastr.success('File Uploaded Successfully', 'Done');
//             console.log("SUCCESS"); 
//             $scope.$apply(function () {
//                $scope.imageName = "https://protometheus-photos.s3.amazonaws.com/" + uniqueFileName; 
//             });
//             console.log(data); 

//             // Reset The Progress Bar
//             setTimeout(function() {
//               $scope.uploadProgress = 0;
//               $scope.$digest();
//             }, 4000);
//           }
//         })
//         .on('httpUploadProgress',function(progress) {
//           $scope.uploadProgress = Math.round(progress.loaded / progress.total * 100);
//           $scope.$digest();
//         });
//       }
//       else {
//         // No File Selected
//         console.log("SELECT A FILE");
// //        toastr.error('Please select a file to upload');
//       }
//     }

//     $scope.fileSizeLabel = function() {
//     // Convert Bytes To MB
//     return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
//   };

//   $scope.uniqueString = function() {
//     var text     = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for( var i=0; i < 8; i++ ) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   }

// })


