/**
 * Created by Joeri Smits on 06/11/2014.
 */

var mongoose = require('mongoose'),
    User = mongoose.model('User');


// ==============================================
// LOGIN PROCESS
// ==============================================
exports.checkLogin = function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
        // Check if the user exists in the database.
        if (user) {

            // Check if the password is the same as the user sends
            if (user.password === req.body.password) {
                res.send({
                    user: user
                })
            } else {
                res.redirect("/home");
                res.send({
                    message: "Wrong password"
                });
            }
        } else {
            res.send({
                message: "User does not exist"
            })
        }
    });
};