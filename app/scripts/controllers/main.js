'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $timeout) {
    $scope.viewTransition = function(loc){
    	
    	$rootScope.squash = "squash";

        function changeView(){$location.path(loc);}
        function cancelAnim(){$rootScope.squash = "ani";}

        $timeout(changeView, 950);
        $timeout(cancelAnim, 1500);

        //document.getElementById("hidden") = 200;
    }
    $scope.cbtn = function(btn){
        console.log('btn' + btn + 'pressed');
        if(btn == 1){
            $("#detail2").collapse('hide');
            $("#detail3").collapse('hide');
            $("#detail4").collapse('hide');
        }
        else if(btn == 2){
            $("#detail").collapse('hide');
            $("#detail3").collapse('hide');
            $("#detail4").collapse('hide');
        }
        else if(btn == 3){
            $("#detail").collapse('hide');
            $("#detail2").collapse('hide');
            $("#detail4").collapse('hide');
        }
        else if(btn == 4){
            $("#detail1").collapse('hide');
            $("#detail2").collapse('hide');
            $("#detail3").collapse('hide');
        }
    }	


    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
    $rootScope.li3 = 'iactive';
    $rootScope.li4 = 'iactive';
  });
