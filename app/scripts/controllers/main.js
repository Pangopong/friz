'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $timeout, $window, $anchorScroll) {
   
    //$('#navTrigger').hover(function(){$('.navbar').css('top', '0px');}, function(){$('.navbar').css('top', '0px');});



    $scope.viewTransition = function(loc){
    	
    	$rootScope.squash = "squash";
      $rootScope.shadow = "none";
        function changeView(){$location.path(loc);}
        function cancelAnim(){$rootScope.squash = "ani"; $rootScope.shadow = "0px 7px 20px 7px black";}

        $timeout(changeView, 950);
        $timeout(cancelAnim, 1500);

        //document.getElementById("hidden") = 200;
    }

    //carousel 
    $scope.cbtn = function(btn){
      
      

        console.log('btn: ' + btn + ' pressed');
        if(btn == 1){
            $("#detail2").collapse('hide');
            $("#detail3").collapse('hide');
        }
        else if(btn == 2){
            $("#detail").collapse('hide');
            $("#detail3").collapse('hide');
        }
        else if(btn == 3){
            $("#detail").collapse('hide');
            $("#detail2").collapse('hide');
        }
        else if(btn == 4){

        }
    }	
   
   //scroll()
   $scope.scroll = function(targetId){
    
    $("body").animate({scrollTop: $(targetId).offset().top}, "slow");

   }
       
    AOS.init({duration: 3000});
    $timeout(AOS.refresh,500);

  });
