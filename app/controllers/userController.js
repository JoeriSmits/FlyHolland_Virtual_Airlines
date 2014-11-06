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
        if (user) {
            console.log("User exist");
            res.send({
                message: "User exist"
            })
        } else {
            console.log("User does not exist");
            res.send({
                message: "User does not exist"
            })
        }
    });
};