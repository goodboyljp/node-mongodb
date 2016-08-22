var app = angular.module('h5_angularjs', ['ngRoute']);
app.config(["$routeProvider",function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'static/app/view/homepage.html',
      controller: 'homepage'
    })
    .when('/next', {
      templateUrl: 'static/app/view/next.html',
      controller: 'next'
    })
    .when('/form', {
      templateUrl: 'static/app/view/form.html',
      controller: 'form'
    })
    .when('/day/:id', {
      templateUrl: 'static/app/view/day.html',
      controller: 'DayCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);