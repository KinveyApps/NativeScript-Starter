var Kinvey = require('kinvey-nativescript-sdk');
var view = require("ui/core/view");

exports.pageLoaded = function() {

};

exports.initialize = function() {
    Kinvey.initialize({
        appKey: '<appKey>',
        appSecret: '<appSecret>'
    })
        .then(function(user) {
            console.dump(user);

            if (user === null) {
                return Kinvey.User.login('<username>', '<password>');
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
