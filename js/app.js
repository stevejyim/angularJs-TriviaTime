var triviaApp = angular.module('triviaApp', ['firebase', 'ngRoute']);

triviaApp.config(['$routeProvider', function($routeProvider){
 $routeProvider.
 	when('/questions', {
 		templateUrl: 'partials/question-list.html',
 		controller: 'QuestionListCtrl'
 	}).
 	when('/questions/new',{
 		templateUrl: 'partials/question-form.html',
 		controller: 'QuestionListCtrl'
 	}).
 	when('/questions/:questionId',{
 		templateUrl: 'partials/question-form.html',
 		controller: 'QuestionDetailCtrl'
 	}).
 	otherwise({
 		redirectTo: '/questions'
 		});
	}]);


triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
	$scope.question = {};

	$scope.persistQuestion = function(question) {
		var firebaseUrl = "https://blinding-fire-6282.firebaseio.com/questions";
		$scope.questions = $firebase(new Firebase(firebaseUrl));
		$scope.questions.$add(question).then(function(ref){
			$location.url('/questions');
		});
	};
}]);

