var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'views/expense.html' })
		.when('/login', { templateUrl: 'views/login.html', controller: 'LoginCtrl' })
		.otherwise({ redirectTo: '/' });
}]);

app.run(function(authentication, $rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function(evt) {
    if(authentication.isAuthenticated){ 
		$location.url("/");
    }else{
		$location.url("/login");
	}
    event.preventDefault();
  });
})

app.controller('ExpensesCtrl', ['$scope', function($scope, authentication) {
	$scope.expenses = [];
	$scope.addExpense = function(){
		var expense = {
			merchant: $scope.newMerchant,
			total: $scope.newTotal,
			date: $scope.newDate,
			comment: $scope.newComment,
			status: 'New',
		};
    	$scope.expenses.push(expense);
	};
 	$scope.removeExpense = function(index){
		$scope.expenses.splice(index, 1);
	};
}]);

app.controller('LoginCtrl', function($scope, $http, $location, authentication) {
  $scope.login = function (username, password) {
    if ( username === 'demo' && password === 'demo') {
  		authentication.isAuthenticated = true;
  		$scope.user = username;
		$scope.loginError = "";
		$scope.loggedUser = "You are logged in as: " + username + ". You can access the Expenses application now";
		$location.url("/");
    } else {
  		$scope.loginError = "Invalid username/password";
    };
  };
});

app.factory('authentication', function() {
  return {
    isAuthenticated: false,
    user: null
  }
});