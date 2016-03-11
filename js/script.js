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
            templateUrl : 'pages/account/login.html',
            controller  : 'loginController'
        })

        // route for the sign-up page
        .when('/signup', {
            templateUrl : 'pages/account/signup.html',
            controller  : 'signupController'
        })

        // route for the log-in page
        .when('/learn', {
            templateUrl : 'pages/learn/learn.html',
            controller  : 'learnController'
        })

        // route for the quiz
        .when('/quiz', {
            templateUrl : 'pages/quiz/quiz.html',
            controller  : 'quizController'
        })

        // route for the results
        .when('/results', {
            templateUrl : 'pages/results/results.html',
            controller  : 'resultsController'
        })

        // route for the quiz
        .when('/saved', {
            templateUrl : 'pages/user/saved.html',
            controller  : 'savedController'
        })

        // route for the results
        .when('/taste', {
            templateUrl : 'pages/user/taste-profile.html',
            controller  : 'tasteController'
        })
});

wineApp.controller('mainController', ['$scope', '$rootScope', '$location', 
    function ($scope, $rootScope, $location) {
        // Expose view variables
        $rootScope.isLoggedIn = $rootScope.isLoggedIn == true || false;

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
wineApp.controller('loginController', function($scope) {

});

// create the controller and inject Angular's $scope
wineApp.controller('signupController', function($scope) {

});

// create the controller and inject Angular's $scope
wineApp.controller('learnController', function($scope) {

});

// create the controller and inject Angular's $scope
wineApp.controller('quizController', function($scope, $location) {
    $scope.progress = 0;
    $scope.currentQuestion = 0;
    $scope.totalQuestions = 10;
    $scope.formData = {
        priceRange: {
            low: 5,
            high: 200
        },
        hasColorPreference: {
            value: 'true'
        },
        colorPreference: {
            red: {
                low: 0,
                high: 10
            },
            white: {
                low: 0,
                high: 10
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
            moscato: 'false'
        },
        isForMeal: {
            value: 'yes'
        },
        iceCreamPreference: {
            chocolate: 'false',
            strawberry: 'false',
            fig: 'false'
        },
        sweetenPreference: {
            low: 0,
            high: 10
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
    }
    $scope.sliderValue = 20;
    $scope.lowerValue = 5;
    $scope.upperValue = 200;
    $scope.forMeal;

    $scope.pagerClicked = function(value) {
        if (value == -1) {
            if ($scope.currentQuestion == 4) {
                if ($scope.formData.hasWineTypePreference.value == 'false') {
                    if ($scope.formData.hasColorPreference.value == 'false') {
                        $scope.currentQuestion = 2;
                        return;
                    } else {
                        $scope.currentQuestion = 2;
                        return;
                    }    
                }
            } else if ($scope.currentQuestion == 7) {
                $scope.currentQuestion = 3;
                return;
            }

            $scope.currentQuestion += value;
            return;
        }

        if ($scope.currentQuestion == 1) {
            if ($scope.formData.hasColorPreference.value == 'false') {
                $scope.formData.hasWineTypePreference.value = 'false';
                $scope.formData.hasWherePreference.value = 'false';
                $scope.currentQuestion = 3;
                return;
            }
        } else if ($scope.currentQuestion == 2) {
            if ($scope.formData.hasWineTypePreference.value == 'false') {
                $scope.formData.hasWherePreference.value = 'false';
                $scope.currentQuestion = 3;
                return;
            }
        } else if ($scope.currentQuestion == 3) {
            if ($scope.formData.isForMeal.value == 'yes') {
                $scope.currentQuestion = 7;
                return;
            }
        }
        
        $scope.currentQuestion += value;
        return;
    };

    $scope.submitQuiz = function(value) {
        $location.path( "/results" );
    };
});

// create the controller and inject Angular's $scope
wineApp.controller('resultsController', function($scope) {
});

// create the controller and inject Angular's $scope
wineApp.controller('savedController', function($scope) {

});

// create the controller and inject Angular's $scope
wineApp.controller('tasteController', function($scope) {
});
