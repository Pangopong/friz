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
    
    

        $(document).ready(function(){$(window).stellar();});


        $scope.viewTransition = function(loc){
    	
    	$rootScope.squash = "squash";
        $rootScope.shadow = "none";
        function changeView(){$location.path(loc);}
        function cancelAnim(){$rootScope.squash = "ani"; $rootScope.shadow = "0px 7px 20px 7px black";}

        $timeout(changeView, 950);
        $timeout(cancelAnim, 1500);
    }

    //OWL
    $(document).ready(function() {
        //$timeout(function() {
        
        
        $("#owl-ban").owlCarousel({

            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });

        $timeout(function(){
        $("#owl-sec2").owlCarousel({

            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });
        }, 300);

        //stellar
    });


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
        
        $(window).scroll(function () {

            var section1 = $('#section1').position().top;
            var section3 = $('#section3').position().top - 50;

            if ($(window).scrollTop() >= oldPoz) {
                
                $('.navbar').css({'position': 'fixed', 'top': '0', 'background-color': 'rgba(0,0,0,0)'});
                                
            }

            if ($(window).scrollTop() < oldPoz) {
                 $('.navbar').css({'position':'relative', 'top': '-100', 'background-color': 'black'});
                  
            }




            //brand color(for visibility)
            if ($(window).scrollTop() > section3 && $(window).scrollTop() < (section3 + $(window).height()) || $(window).scrollTop() > section1 && $(window).scrollTop() < (section1 + $('#section1').height())){
                $('#brand').css('filter', 'invert(100%)');
            }
            else $('#brand').css('filter', 'invert(0)');

            });
    });

    //map
    $(document).ready(function(){
        // you want to enable the pointer events only on click;

        $('#map').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#section4').on('click', function () {
            $('#map').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map").mouseleave(function () {
            $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });
    });



    /*
    var clock = $('.your-clock').FlipClock({

    });
    */

});
