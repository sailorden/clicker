var fb = new Firebase("https://clickerprj.firebaseio.com/");
// var fb = new Firebase("https://clicker-project-dev.firebaseio.com/");


angular.module('app', ['ionic', 'app.login', 'app.signup', 'app.dash',
  'app.members','app.contact','app.services', 'firebase','monospaced.qrcode','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'loginController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .state('grouplist', {
      url: '/grouplist',
      templateUrl: 'app/dash/dash.html',
      controller: 'groupListController',
      onEnter: function($state, SessionAuth){
        if(!SessionAuth.isLoggedIn()){
           $state.go('login');
        }
      }
    })
    .state('group', {
        url: '/grouplist',
        templateUrl: 'app/dash/details.html',
        controller: 'groupController',
        params: {
          grp_key: null,
          grp_name: null
        }
    })
    .state('grouplistmember', {
      url: '/grouplistmember',
      templateUrl: 'app/members/members.html',
      controller: 'groupListMemberController',
      params: {
        grp_key: null,
        grp_name: null,
        grp_desc: null,
        grp_img: null
      }
    })
    .state('contact',{
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'contactController',
      params: {
        grp_key: null,
        grp_name: null
      }
    });

  $urlRouterProvider.otherwise('/grouplist');

});
