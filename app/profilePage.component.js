"use strict";
const profilePage = {
    template: `
    <form class="landingpage">
    <img src="app/style/IMG_0052.jpg">
    <p> <span>{{$ctrl.editProfileObject.name}}</span></p>
    <p> <span>{{$ctrl.editProfileObject.contact}}</span></p>
    <p> <span>{{$ctrl.editProfileObject.bio}}</span></p>
    <button ng-click="$ctrl.editForm()">Edit</button>
    </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.editProfileObject = ProfileService.getUserProfile();
        vm.editForm = function() {
            console.log("log my profile");
            ProfileService.editUserProfile();
        }
    }]
}


angular
    .module("ProfileApp")
    .component("profilePage", profilePage);