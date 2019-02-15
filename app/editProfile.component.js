"use strict";
const editProfile = {
    template: `
    <form ng-submit="$ctrl.editProfile($ctrl.editProfileObject)" class="container"> 
        <span> Use the form below to update your profile.</span>
        <p>Name</p>
        <input placeholder="name" ng-model="$ctrl.editProfileObject.name">
        <p>Contact Information</p>
        <input placeholder="Contact Information" ng-model="$ctrl.editProfileObject.contact"> 
        <p>Bio</p>
        <textarea name="" id="" cols="5" rows="10" placeholder="Bio" ng-model="$ctrl.editProfileObject.bio"></textarea>
        <button>Update</button>
    </form>
      `,
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.editProfileObject = ProfileService.getUserProfile();
        console.log(vm.editProfileObject)
        vm.editProfile = function (editProfileObject) {
            console.log(editProfileObject);
            ProfileService.setUserProfile(editProfileObject);
            // ProfileService.setUserProfile();
            ProfileService.goHome();
        }
    }]
}
angular
    .module("ProfileApp")
    .component("editProfile", editProfile);