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
                low: 18,
                high: 27
            },
            hasColorPreference: {
                value: 'true'
            },
            colorPreference: {
                red: {
                    value: 5
                },
                white: {
                    value: 5
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
                value: ''
            },
            iceCreamPreference: {
                chocolate: 'false',
                strawberry: 'false',
                vanilla: 'false'
            },
            sweetenPreference: {
                value: 5
            },
            smells: {
                fire: 'false',
                flowers: 'false',
                beach: 'false'
            },
            mealType: {
                value: ''
            },
            dinnerType: {
                chicken: 'false',
                fish: 'false',
                beef: 'false',
                vegetables: 'false',
                pasta: 'false',
                cheese: 'false'
            },
            dessertType: {
                cake: 'false',
                fruit: 'false'
            },
            cheeseType: {
                bloomy: 'false',
                hard: 'false',
                blue: 'false',
                fresh: 'false'
            }
        };
        $rootScope.wineScores = {
            merlot: 0,
            reisling: 0,
            chardonnay: 0,
            sauvignonblanc: 0,
            cabernetsauvignon: 0,
            malbec: 0,
            zinfandel: 0,
            pinotnoir: 0,
            pinotgrigio: 0,
            pinotblanc: 0
        };
        $rootScope.wineRecommendations = [];
        $rootScope.hasTasteProfile = 'false';
        $rootScope.tasteProfile = {
            priceRange: {
                low: 18,
                high: 27
            },
            hasColorPreference: {
                value: 'true'
            },
            colorPreference: {
                red: {
                    value: 5
                },
                white: {
                    value: 5
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
                value: ''
            },
            iceCreamPreference: {
                chocolate: 'false',
                strawberry: 'false',
                vanilla: 'false'
            },
            sweetenPreference: {
                value: 5
            },
            smells: {
                fire: 'false',
                flowers: 'false',
                beach: 'false'
            },
            mealType: {
                value: ''
            },
            dinnerType: {
                chicken: 'false',
                fish: 'false',
                beef: 'false',
                vegetables: 'false',
                pasta: 'false',
                cheese: 'false'
            },
            dessertType: {
                cake: 'false',
                fruit: 'false'
            },
            cheeseType: {
                bloomy: 'false',
                hard: 'false',
                blue: 'false',
                fresh: 'false'
            }
        };

        $scope.changeWineTypeValue = function(value) {
            $rootScope.wineTypeValue = value;
            return;
        };

        $scope.logIn = function() {
            $rootScope.isLoggedIn = true;
            $location.path("/home");

        };

        $scope.logOut = function() {
            $rootScope.isLoggedIn = false;
            $location.path("/home");
        };

        $scope.routeTo = function(value) {
            $location.path(value);
        }
    }
]);

// create the controller and inject Angular's $scope
wineApp.controller('quizController', function($scope, $rootScope, $location) {
    $scope.progressValues = [16, 32, 48, 53, 58, 63, 63, 82, 82, 82, 90];
    $scope.currentQuestion = 1;
    $scope.totalQuestions = 10;
    $scope.sliderValue = 20;
    $scope.lowerValue = 5;
    $scope.upperValue = 200;

    $scope.pagerClicked = function(value) {
        if (value == -1) {
            if ($scope.currentQuestion == 7) {
                $scope.currentQuestion = 3;
                return;
            } else if ($scope.currentQuestion == 9 || $scope.currentQuestion == 10) {
                $scope.currentQuestion = 7;
                return;
            } else if ($scope.currentQuestion == 11) {
                if ($rootScope.formData.isForMeal.value == 'true') {
                    if ($rootScope.formData.mealType.value == 'cheese') {
                        $scope.currentQuestion = 9;
                        return;
                    } else if ($rootScope.formData.mealType.value == 'dinner') {
                        $scope.currentQuestion = 8;
                        return;
                    }
                } else {
                    $scope.currentQuestion = 6;
                    return;
                }
            }

            $scope.currentQuestion += value;
            return;
        }

        else if (value == 1) {
            if ($scope.currentQuestion == 3) {
                if ($rootScope.formData.isForMeal.value == 'true') {
                    $scope.currentQuestion = 7;
                    return;
                }
            } else if ($scope.currentQuestion == 6) {
                $scope.currentQuestion = 11;
                return;
            } else if ($scope.currentQuestion == 7) {
                if ($rootScope.formData.mealType.value == 'cheese') {
                    $scope.currentQuestion = 9;
                    return;
                } else if ($rootScope.formData.mealType.value == 'dessert') {
                    $scope.currentQuestion = 10;
                    return;
                }
            } else if ($scope.currentQuestion == 8 || $scope.currentQuestion == 9) {
                $scope.currentQuestion = 11;
                return;
            }
        }
        
        $scope.currentQuestion += value;
        return;
    };

    $scope.submitQuiz = function(value) {
        /*add points based on color preference*/
        if ($rootScope.formData.colorPreference.red > 5) {
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.pinotnoir += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.zinfandel += 1;
            $rootScope.wineScores.cabernetsauvignon += 1;
            if ($rootScope.formData.colorPreference.red > 8) {
                $rootScope.wineScores.merlot += 1;
                $rootScope.wineScores.pinotnoir += 1;
                $rootScope.wineScores.malbec += 1;
                $rootScope.wineScores.zinfandel += 1;
                $rootScope.wineScores.cabernetsauvignon += 1;
            }
        }
        if ($rootScope.formData.colorPreference.red < 5) {
            $rootScope.wineScores.merlot += -1;
            $rootScope.wineScores.pinotnoir += -1;
            $rootScope.wineScores.malbec += -1;
            $rootScope.wineScores.zinfandel += -1;
            $rootScope.wineScores.cabernetsauvignon += -1;
            if ($rootScope.formData.colorPreference.red < 2) {
                $rootScope.wineScores.merlot += -1;
                $rootScope.wineScores.pinotnoir += -1;
                $rootScope.wineScores.malbec += -1;
                $rootScope.wineScores.zinfandel += -1;
                $rootScope.wineScores.cabernetsauvignon += -1;
            }
        }
        if ($rootScope.formData.colorPreference.white > 5) {
            $rootScope.wineScores.pinotgrigio += 1;
            $rootScope.wineScores.pinotblanc += 1;
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
            if ($rootScope.formData.colorPreference.white > 8) {
                $rootScope.wineScores.pinotgrigio += 1;
                $rootScope.wineScores.pinotblanc += 1;
                $rootScope.wineScores.chardonnay += 1;
                $rootScope.wineScores.reisling += 1;
                $rootScope.wineScores.sauvignonblanc += 1;
            }
        }
        if ($rootScope.formData.colorPreference.white < 5) {
            $rootScope.wineScores.pinotgrigio += -1;
            $rootScope.wineScores.pinotblanc += -1;
            $rootScope.wineScores.chardonnay += -1;
            $rootScope.wineScores.reisling += -1;
            $rootScope.wineScores.sauvignonblanc += -1;
            if ($rootScope.formData.colorPreference.white < 2) {
                $rootScope.wineScores.pinotgrigio += -1;
                $rootScope.wineScores.pinotblanc += -1;
                $rootScope.wineScores.chardonnay += -1;
                $rootScope.wineScores.reisling += -1;
                $rootScope.wineScores.sauvignonblanc += -1;
            }
        }

        /*add points based on wine type preference*/
        if ($rootScope.formData.wineTypePreference.merlot == 'true') {
            $rootScope.wineScores.merlot += 1;
        }
        if ($rootScope.formData.wineTypePreference.reisling == 'true') {
            $rootScope.wineScores.reisling += 1;
        }
        if ($rootScope.formData.wineTypePreference.chardonnay == 'true') {
            $rootScope.wineScores.chardonnay += 1;
        }
        if ($rootScope.formData.wineTypePreference.sauvignonblanc == 'true') {
            $rootScope.wineScores.sauvignonblanc += 1;
        }
        if ($rootScope.formData.wineTypePreference.cabernetsauvignon == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
        }
        if ($rootScope.formData.wineTypePreference.malbec == 'true') {
            $rootScope.wineScores.malbec += 1;
        }
        if ($rootScope.formData.wineTypePreference.zinfandel == 'true') {
            $rootScope.wineScores.zinfandel += 1;
        }
        if ($rootScope.formData.wineTypePreference.pinotgrigio == 'true') {
            $rootScope.wineScores.pinotgrigio += 1;
        }
        if ($rootScope.formData.wineTypePreference.pinotnoir == 'true') {
            $rootScope.wineScores.pinotnoir += 1;
        }
        if ($rootScope.formData.wineTypePreference.pinotblanc == 'true') {
            $rootScope.wineScores.pinotblanc += 1;
        }

        /*add points based on meal type*/
        if ($rootScope.formData.dinnerType.beef == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.pinotnoir += 1;
            $rootScope.wineScores.zinfandel += 2;
            $rootScope.wineScores.malbec += 1;
        }
        if ($rootScope.formData.dinnerType.chicken == 'true') {
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.pinotgrigio += 2;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.zinfandel += 1;
            $rootScope.wineScores.pinotblanc += 1;
        }
        if ($rootScope.formData.dinnerType.fish == 'true') {
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
        }
        if ($rootScope.formData.dinnerType.pasta == 'true') {
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.pinotnoir += 2;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.zinfandel += 1;
        }
        if ($rootScope.formData.dinnerType.vegetables == 'true') {
            $rootScope.wineScores.pinotgrigio += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.pinotblanc += 2;
        }

        /*add points based on cheese type*/
        if ($rootScope.formData.cheeseType.bloomy == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.pinotblanc += 2;
            $rootScope.wineScores.reisling += 1;
        }
        if ($rootScope.formData.cheeseType.hard == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.zinfandel += 2;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.pinotnoir += 2;
        }
        if ($rootScope.formData.cheeseType.blue == 'true') {
            $rootScope.wineScores.reisling += 1;
        }
        if ($rootScope.formData.cheeseType.fresh == 'true') {
            $rootScope.wineScores.pinotgrigio += 2;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.merlot += 1;
        }

        /*add points based on dessert type*/
        if ($rootScope.formData.dessertType.cake == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.pinotnoir += 1;
        }
        if ($rootScope.formData.dessertType.fruit == 'true') {
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.pinotgrigio += 1;
            $rootScope.wineScores.pinotblanc += 1;
        }

        /*add points based on ice cream preference*/
        if ($rootScope.formData.iceCreamPreference.vanilla == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.pinotblanc += 1;
            $rootScope.wineScores.pinotnoir += 1;
        }
        if ($rootScope.formData.iceCreamPreference.strawberry == 'true') {
            $rootScope.wineScores.pinotgrigio += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
        }
        if ($rootScope.formData.iceCreamPreference.chocolate == 'true') {
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.malbec += 1;
            $rootScope.wineScores.zinfandel += 1;
        }

        /*add points based on smell preference*/
        if ($rootScope.formData.smells.fire == 'true') {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.pinotnoir += 1;
            $rootScope.wineScores.zinfandel += 1;
            $rootScope.wineScores.malbec += 1;
        }
        if ($rootScope.formData.smells.flowers == 'true') {
            $rootScope.wineScores.pinotblanc += 1;
            $rootScope.wineScores.reisling += 1;
            $rootScope.wineScores.sauvignonblanc += 1;
            $rootScope.wineScores.merlot += 1;
            $rootScope.wineScores.chardonnay += 1;
        }
        if ($rootScope.formData.smells.beach == 'true') {
            $rootScope.wineScores.pinotgrigio += 1;
        }

        /*add points based on sweeten preference*/
        if ($rootScope.formData.sweetenPreference.value < 5) {
            $rootScope.wineScores.cabernetsauvignon += 1;
            $rootScope.wineScores.chardonnay += 1;
        }
        if ($rootScope.formData.sweetenPreference.value < 5) {
            $rootScope.wineScores.cabernetsauvignon += -1;
            $rootScope.wineScores.chardonnay += -1;
        }

        /*add points based on price range*/
        if ($rootScope.formData.priceRange.low < 10) {
            $rootScope.wineScores.chardonnay += 1;
            $rootScope.wineScores.reisling += -1;
        }
        if ($rootScope.formData.priceRange.high > 30) {
            $rootScope.wineScores.chardonnay += -1;
            $rootScope.wineScores.reisling += 1;
        }

        var wineScoreValues = [
                                ['chardonnay', $rootScope.wineScores.chardonnay], 
                                ['cabernetsauvignon', $rootScope.wineScores.cabernetsauvignon], 
                                ['reisling', $rootScope.wineScores.reisling], 
                                ['pinotblanc', $rootScope.wineScores.pinotblanc],
                                ['pinotgrigio', $rootScope.wineScores.pinotgrigio], 
                                ['pinotnoir', $rootScope.wineScores.pinotnoir],
                                ['zinfandel', $rootScope.wineScores.zinfandel], 
                                ['merlot', $rootScope.wineScores.merlot],
                                ['malbec', $rootScope.wineScores.malbec], 
                                ['sauvignonblanc', $rootScope.wineScores.sauvignonblanc]
                              ];
        var wine1 = '',
            wine2 = '',
            wine3 = '',
            wine4 = '',
            wine1val = -5,
            wine2val = -5,
            wine3val = -5, 
            wine4val = -5;

        for (var i = 0; i != 10; ++i) {
            if (wineScoreValues[i][1] > wine1val) {
                wine4 = wine3;
                wine4val = wine3val;
                wine3 = wine2;
                wine3val = wine2val;
                wine2 = wine1;
                wine2val = wine1val;
                wine1 = wineScoreValues[i][0];
                wine1val = wineScoreValues[i][1];
            } else if (wineScoreValues[i][1] > wine2val) {
                wine4 = wine3;
                wine4val = wine3val;
                wine3 = wine2;
                wine3val = wine2val;
                wine2 = wineScoreValues[i][0];
                wine2val = wineScoreValues[i][1];
            } else if (wineScoreValues[i][1] > wine3val) {
                wine4 = wine3;
                wine4val = wine3val;
                wine3 = wineScoreValues[i][0];
                wine3val = wineScoreValues[i][1];
            } else if (wineScoreValues[i][1] > wine4val) {
                wine4 = wineScoreValues[i][0];
                wine4val = wineScoreValues[i][1];
            }
        }

        $rootScope.wineRecommendations = [wine1, wine2, wine3, wine4];
        if ($rootScope.isLoggedIn == true) {
            $rootScope.hasTasteProfile = 'true';
            $rootScope.tasteProfile = $rootScope.formData;
        }      

        $location.path( "/results" );
    };

    $scope.toString = function (value) {
        var string;
        switch(value) {
            case 'pinotgrigio':
                string = 'Pinot Grigio';
                break;
            case 'pinotblanc':
                string = 'Pinot Blanc';
                break;
            case 'pinotnoir':
                string = 'Pinot Noir';
                break;
            case 'chardonnay':
                string = 'Chardonnay';
                break;
            case 'cabernetsauvignon':
                string = 'Cabernet Sauvignon';
                break;
            case 'merlot':
                string = 'Merlot';
                break;
            case 'malbec':
                string = 'Malbec';
                break;
            case 'reisling':
                string = 'Reisling';
                break;
            case 'zinfandel':
                string = 'Zinfandel';
                break;
            case 'sauvignonblanc':
                string = 'Sauvignon Blanc';
                break;
            default:
                break;
        }
        return string;
    };
});
