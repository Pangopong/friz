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
    	
    	$scope.anim = "anim";

        function changeView(){$location.path(loc);}

        $timeout(changeView, 950);

        //document.getElementById("hidden") = 200;
    }
    	


    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
  });
