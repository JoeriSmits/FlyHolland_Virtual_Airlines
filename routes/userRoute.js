/**
 * Created by Joeri Smits on 06/11/2014.
 */

var express = require('express');
var router = express.Router();

var controller = require('../app/controllers/userController');

router.route('/login')
    .post(controller.checkLogin);

module.exports = router;
