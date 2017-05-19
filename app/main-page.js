var Kinvey = require('kinvey-nativescript-sdk');
var view = require("ui/core/view");

exports.pageLoaded = function() {

};

exports.initialize = function() {
    Kinvey.initialize({
        appKey: 'kid_rJQ3fa0il',
        appSecret: 'f934cde41bef41368bfa778692e690aa'
    })
        .then(function(user) {
            console.dump(user);

            if (user === null) {
                return Kinvey.User.loginWithMIC('https://localhost:3000');
            }

            return user;
        })
        .then(function() {
            var store = Kinvey.DataStore.collection('books');
            return store.find().toPromise();
        })
        .then(function() {
            return Kinvey.User.logout();
        })
};