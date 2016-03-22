// create the module and name it wineApp
var wineApp = angular.module('wineApp', []);

var wineApp = angular.module('wineApp', ['ngRoute', 'angularRangeSlider']);

// configure our routes
wineApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/site-components/home.html',
            controller  : 'mainController'
        })

        // route for the home page
        .when('/home', {
            templateUrl : 'pages/site-components/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/login', {
            templateUrl : 'pages/account/login.html'
        })

        // route for the sign-up page
        .when('/signup', {
            templateUrl : 'pages/account/signup.html'
        })

        // route for the log-in page
        .when('/learn', {
            templateUrl : 'pages/learn/learn.html'
        })

        // route for the quiz
        .when('/quiz', {
            templateUrl : 'pages/quiz/quiz.html',
            controller  : 'quizController'
        })

        // route for the results
        .when('/results', {
            templateUrl : 'pages/results/results.html'
        })

        // route for the quiz
        .when('/saved', {
            templateUrl : 'pages/user/saved.html'
        })

        // route for the results
        .when('/taste', {
            templateUrl : 'pages/user/taste-profile.html'

        })
});

wineApp.controller('mainController', ['$scope', '$rootScope', '$location', 
    function ($scope, $rootScope, $location) {
        // Expose view variables
        $rootScope.isLoggedIn = $rootScope.isLoggedIn == true || false;
        $rootScope.wineTypeValue = '';
        $rootScope.formData = {
            priceRange: {
                low: 5,
                high: 200
            },
            hasColorPreference: {
                value: 'true'
            },
            colorPreference: {
                red: {
                    value: 10
                },
                white: {
                    value: 10
                }
            },
            hasWineTypePreference: {
                value: 'true'
            },
            wineTypePreference: {
                merlot: 'false',
                reisling: 'false',
                chardonnay: 'false',
                sauvignonblanc:'false',
                cabernetsauvignon: 'false',
                malbec: 'false',
                zinfandel: 'false',
                pinotnoir: 'false',
                pinotgrigio: 'false',
                pinotblanc: 'false'
            },
            isForMeal: {
                value: 'true'
            },
            iceCreamPreference: {
                chocolate: 'false',
                strawberry: 'false',
                vanilla: 'false'
            },
            sweetenPreference: {
                value: 10
            },
            smells: {
                fire: 'false',
                flowers: 'false',
                beach: 'false'
            },
            mealType: {
                value: 'dinner'
            },
            dinnerType: {
                chicken: 'false',
                fish: 'false',
                vegetables: 'false'
            },
            dessertType: {
                cake: 'false',
                fruit: 'false'
            }
        };

        $scope.logIn = function() {
            $rootScope.isLoggedIn = true;
            $location.path("/home");

        };

        $scope.logOut = function() {
            $rootScope.isLoggedIn = false;
            $location.path("/home");
        };
    }
]);

// create the controller and inject Angular's $scope
wineApp.controller('quizController', function($scope, $rootScope, $location) {
    $scope.progressValues = [0, 14, 28, 42, 57, 71, 85, 70, 85, 85];
    $scope.currentQuestion = 0;
    $scope.totalQuestions = 10;
    $scope.sliderValue = 20;
    $scope.lowerValue = 5;
    $scope.upperValue = 200;

    $scope.pagerClicked = function(value) {
        if (value == -1) {
            if ($scope.currentQuestion == 3) {
                if ($rootScope.formData.hasWineTypePreference.value == 'false') {
                    if ($rootScope.formData.hasColorPreference.value == 'false') {
                        $scope.currentQuestion = 1;
                        return;
                    } else {
                        $scope.currentQuestion = 2;
                        return;
                    }    
                }
            } else if ($scope.currentQuestion == 7) {
                $scope.currentQuestion = 3;
                return;
            } else if ($scope.currentQuestion == 9) {
                $scope.currentQuestion = 7;
                return;
            }

            $scope.currentQuestion += value;
            return;
        }

        else if (value == 1) {
            if ($scope.currentQuestion == 1) {
                if ($rootScope.formData.hasColorPreference.value == 'false') {
                    $rootScope.formData.hasWineTypePreference.value = 'false';
                    $scope.currentQuestion = 3;
                    return;
                }
            } else if ($scope.currentQuestion == 2) {
                if ($rootScope.formData.hasWineTypePreference.value == 'false') {
                    $scope.currentQuestion = 3;
                    return;
                }
            } else if ($scope.currentQuestion == 3) {
                if ($rootScope.formData.isForMeal.value == 'true') {
                    $scope.currentQuestion = 7;
                    return;
                }
            } else if ($scope.currentQuestion == 7) {
                if ($rootScope.formData.mealType.value == 'dessert') {
                    $scope.currentQuestion = 9;
                    return;
                }
            }
        }
        
        $scope.currentQuestion += value;
        return;
    };

    $scope.submitQuiz = function(value) {
        $location.path( "/results" );
    };

    $scope.changeWineTypeValue = function(value) {
        $rootScope.wineTypeValue = value;
        return;
    }
});
