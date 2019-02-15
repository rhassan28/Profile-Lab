"use strict";
function ProfileService ($location) {
    const self = this;
    self.editProfileObject = {
        name: "Raphael Hassan",
        contact: "rhassan572@gmail.com",
        bio: "I have no friends be minez :/"
    }
    self.getUserProfile = function() {
        return self.editProfileObject;
    }
    self.setUserProfile = function(editProfileObject) {
        self.editProfileObject = editProfileObject;
    }
    self.editUserProfile = function() {
        $location.path("/editprofile")
    }
    self.goHome = function() {
        $location.path("/profilepage")
        console.log("go home");
        
    }
}

angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService);