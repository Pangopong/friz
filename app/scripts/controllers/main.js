'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */



angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, $location, $timeout, $window, $anchorScroll) {



        //$(document).ready(function(){$(window).stellar();});


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
        $scope.getEvents();

        $('#calendar').fullCalendar({
        defaultView: 'agendaWeek',
        selectable: true,
        unselectAuto: false,
        selectOverlap: false,
        firstDay: 1,
        slotLabelInterval: '00:30:00',
        minTime: '10:00:00',
        maxTime: '20:00:00',
        allDaySlot: false,
        height: 450,
        titleFormat: 'DDMMMM',
        eventColor: '#378006',
        displayEventTime: false,
        dayClick: function(date, jsEvent, view) {
        //delete default id enabling backend autoUniqueIdentification
        delete $scope.dat._id;

        $scope.dat.start = date.format('');
        $scope.dat.end = moment($scope.dat.start).add(30, 'minutes').format('Y-MM-DDTHH:mm:ss');
        console.log($scope.dat.start + '-' +$scope.dat.end);

        },
        events: $scope.jsonator

    });

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
            singleItem:true,
            autoPlay: true
        });
        }, 300);

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

    $timeout(function(){$("body, html").animate({scrollTop: $(targetId).offset().top}, "slow");}, delay);
    console.log('button pressed');
   }

    AOS.init({duration: 3000});
    $timeout(AOS.refresh,500);


    //navbar scrollfix
    $(document).ready(function() {

        $('body, html').animate({scrollTop: 1}, 'slow');
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
            /*
            if ($(window).scrollTop() > section3 && $(window).scrollTop() < (section3 + $(window).height()) || $(window).scrollTop() > section1 && $(window).scrollTop() < (section1 + $('#section1').height())){
                $('#brand').css('filter', 'invert(100%)');
            }
            else $('#brand').css('filter', 'invert(0)');
            */
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


    //BACKEND
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.jsonator = [];
    $scope.dat = {start: "2016-04-24T10:00:00",
                    end: "2016-04-24T10:30:00",
                  title: "TunsClasic",
                    _id:"0"
                };

    var programat = 0;

    $scope.tuns = function(ser){
        $scope.dat.title = ser;
        console.log($scope.dat.title);
    }

    $scope.anulare = function(){
        $('#anulare').prop('disabled', true);
    }

    $scope.getEvents = function(){
        $http({
            method: 'GET',
            url: 'http://139.59.136.223:3000'
        }).then(function successCallback(response) {

            $scope.jsonator = response.data;
            console.log($scope.jsonator);

            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', $scope.jsonator);


        }, function errorCallback(response) {

            console.log(response);
        });
    }

    $scope.programare = function(){

            var req = {
            method: 'POST',
            url: 'http://139.59.136.223:3000',
            data: $scope.dat
            }
            console.log(req.data);
            $http(req).then(function(){console.log('Blanao'); $scope.getEvents();}, function(){console.log('NO POST')});

    }

    /*
    $scope.programare = function(){

        if(($scope.phone != '' && $scope.start != 'null' && programat == 0) || $scope.rmToken == 1){
        //$http.post('http://192.168.0.105:3000', data, config).then(successCallback, errorCallback);

            programat++;
            $('#anulare').prop('disabled', false);

            var req = {
            method: 'POST',
            url: 'http://139.59.136.223:3000/?title=' + $scope.title + '&start=' + $scope.start + '&end=' + $scope.end + '&email=' + $scope.email + '&phone=' + $scope.phone + '&name=' + $scope.name + '&control=' + $scope.control,
            headers: {
                'Content-Type': undefined
            },
            data: { test: 'test' }
            }
            console.log(req);
            $http(req).then(function(){alert('Programarea a fost efectuată cu succes, în câteva minute un membru al echipei vă v-a contacta pentru confirmarea programării\n'); $scope.getEvents();}, function(){alert('NO POST')});

        }
        else if($scope.start == 'null') alert('Alege o zi și o oră');
        else if(programat) alert('Limita de programări atinsă, pentru anulare puteți să folosiți butonul adiacent ultimului buton apăsat');
    }*/



});
