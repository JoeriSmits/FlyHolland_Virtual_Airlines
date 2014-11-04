/**
 * Created by Joeri Smits on 04/11/2014.
 */
/*jslint node: true, devel:true */
"use strict";

// Requiring the server object from app.js
var http = require('../app');

var server = http.listen(process.env.PORT || 3000, function () {
    console.log('FlyHolland Virtual Airlines server listening on port ' + server.address().port);
});