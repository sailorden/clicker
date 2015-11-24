angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupController'
    })
        
    .state('grouplist', {
      url: '/grouplist',
      templateUrl: 'templates/grouplist.html',
      controller: 'groupListController'
    })

    .state('group', {
        url: '/grouplist/:grp_key',
        templateUrl: 'templates/group.html',
        controller: 'groupController',
        params: {
          grp_key: null
        }   
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});