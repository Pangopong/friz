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
    	


    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
  });
