'use strict';

angular.module('materialColors', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
    .controller('PageCtrl', ['$rootScope', '$scope', '$window', '$location', '$anchorScroll', function ($rootScope, $scope, $window, $location, $anchorScroll) {

        $rootScope.colors = [
            { key: 'red', code: '#f44336' },
            { key: 'pink', code: '#e91e63' },
            { key: 'purple', code: '#9c27b0' },
            { key: 'deep-purple', code: '#673ab7' },
            { key: 'indigo', code: '#3f51b5' },
            { key: 'blue', code: '#2196f3' },
            { key: 'light-blue', code: '#03a9f4' },
            { key: 'cyan', code: '#00bcd4' },
            { key: 'teal', code: '#009688' },
            { key: 'green', code: '#4caf50' },
            { key: 'light-green', code: '#8bc34a' },
            { key: 'lime', code: '#cddc39' },
            { key: 'yellow', code: '#ffeb3b' },
            { key: 'amber', code: '#ffc107' },
            { key: 'orange', code: '#ff9800' },
            { key: 'deep-orange', code: '#ff5722' },
            { key: 'brown', code: '#795548' },
            { key: 'grey', code: '#9e9e9e' },
            { key: 'blue-grey', code: '#607d8b' }
        ];

        $rootScope.theme = 'black';

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            //    $scope.isCollapsed = false;
            $scope.menuOpen = false;
            $scope.menuOpenRight = false;
            $scope.dropdownFbtnOpen = false;
        });

        // observe scroll of window
        angular.element($window).bind('scroll', function () {
            var scrollTop = $window.scrollY || $window.pageYOffset || $window.document.documentElement.scrollTop;
            var body = angular.element(document.body);
            if (scrollTop > 100) {
                body.addClass('page-offset');
            } else {
                body.removeClass('page-offset');
            }
            if (scrollTop > 0) {
                body.addClass('page-scroll');
            } else {
                body.removeClass('page-scroll');
            }
        });
        $rootScope.scrollTop = function () {
            $location.hash();
            $anchorScroll();
        };

        /** Menu Design **/
        $scope.menuOpen = false;
        $scope.menuOpenRight = false;
        angular.element(document.getElementById('navbar-back')).on('mousedown', function () {
            $scope.menuOpen = false;
            $scope.menuOpenRight = false;
            $scope.$apply();
        });
        $scope.toggleMenu = function () {
            $scope.menuOpen = !$scope.menuOpen;
            $scope.menuOpenRight = false;
        };
        $scope.toggleProfile = function () {
            $scope.menuOpen = false;
            $scope.menuOpenRight = !$scope.menuOpenRight;
        };
    }]
).controller('MenuCtrl', ['$rootScope', '$interval', function ($rootScope, $interval) {
        var index = 0,
            titleColor = document.getElementById('title-color');
        $interval(function () {
            $rootScope.theme = $rootScope.colors[index].key;
            titleColor.className = 'bg-' + $rootScope.colors[index].key;
            titleColor.innerHTML = $rootScope.colors[index].key;
            if (index < $rootScope.colors.length - 1) {
                index++;
            } else {
                index = 0;
            }
        }, 1000);
    }]);