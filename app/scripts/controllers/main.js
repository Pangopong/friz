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
    
    //$('#navTrigger').hover(function(){$('.navbar').css('top', '0px');}, function(){$('.navbar').css('top', '-50px');});
    // navbar-fixed-top

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
    }	
   
   //scroll()
   $scope.scroll = function(targetId, delay){

    $timeout(function(){$("body").animate({scrollTop: $(targetId).offset().top}, "slow");}, delay);
    
   }
       
    AOS.init({duration: 3000});
    $timeout(AOS.refresh,500);


    //navbar scrollfix
    $(document).ready(function() {
                

        console.log('navbar position: ' + $('.navbar').position().top);
        var oldPoz = $('.navbar').position().top;

        var oldPozOffset = oldPoz + 50;
        $('navTrigger').css('top', oldPoz.toString());
        
        $(window).scroll(function () {

            var section1 = $('#section1').position().top;
            var section3 = $('#section3').position().top - 50;

            if ($(window).scrollTop() >= oldPoz) {
                
                $('.navbar').css({'position': 'fixed', 'top': '0', 'background-color': 'rgba(0,0,0,0)'});
                
                //if($(window).scrollTop() <= oldPozOffset){
                //$timeout(function() {$('.navbar').css({'position': 'fixed', 'top': '-50px'});}, 1000);
                //}                
            }

            if ($(window).scrollTop() < oldPoz) {
                 $('.navbar').css({'position':'relative', 'top': '0', 'background-color': 'black'});
            }

            //brand color(for visibility)

            if ($(window).scrollTop() > section3 && $(window).scrollTop() < (section3 + $(window).height()) || $(window).scrollTop() > section1 && $(window).scrollTop() < (section1 + $('#section1').height())){
                $('#brand').css('filter', 'invert(100%)');
            }
            else $('#brand').css('filter', 'invert(0)');

            });
    });




});
