var app = angular.module('h5_angularjs', ['ngRoute']);
app.config(["$routeProvider",function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/homepage.html',
      controller: 'homepage'
    })
    .when('/next', {
      templateUrl: 'view/next.html',
      controller: 'next'
    })
    .when('/form', {
      templateUrl: 'view/form.html',
      controller: 'form'
    })
    .when('/day/:id', {
      templateUrl: 'view/day.html',
      controller: 'DayCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);
app.controller("form", ["$scope",function($scope) {
        $scope.form = {
            firstName: "form"
        };
    }
]);
app.controller("homepage", ["$scope",function($scope) {
        $scope.person = {
            firstName: "John",
            lastName: "Doe"
        };
    }
]);
app.controller("next", ["$scope","$location",function($scope,$location) {
        $scope.next = {
            firstName: "next"
        };
        $scope.count = 0;
        $scope.name = "ZhangLitao";
        $scope.showName = function(){
        	console.log( $location );
        	console.log($location.path("/").replace());
        	// $scope.count++;
        	// console.log( $scope.name.toLocaleLowerCase() );
        }
    }
]);