"use strict";
angular
    .module("ProfileApp")
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/editprofile", {
                template: "<edit-profile></edit-profile>"
            })
            .when("/profilepage", {
                template: "<profile-page></profile-page>"
            });
    }]);