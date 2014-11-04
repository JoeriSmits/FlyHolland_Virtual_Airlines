/**
 * Created by Joeri Smits on 04/11/2014.
 */

var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require("body-parser");

// Making an express server
var app = express();

// Using the bodyparser on the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var http = require('http').Server(app);
var io = require('socket.io')(http);

// Using directory client-side as client directory.
app.use(express.static(path.join(__dirname, 'client-side')));

//Export the server to the start file
module.exports = http;