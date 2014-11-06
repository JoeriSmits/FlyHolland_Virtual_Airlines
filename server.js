/**
 * Created by Joeri Smits on 06/11/2014.
 */
/*jslint node: true */

"use strict";

// Requiring all the middleware we use in this application
var express     = require('express'),
    fs          = require('fs'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    app         = express();

// Load configuration
var env = process.env.NODE_ENV || 'production',
    config = require('./config/database.js')[env];

// Bootstrap db connection
mongoose.connect(config.db);
mongoose.connection.on('error', function (err) {
    console.error('MongoDB error: %s', err);
});

// Using directory client-side as client directory.
app.use(express.static(path.join(__dirname, 'client-side')));

// Bootstrap models
var models_path = __dirname + '/app/models',
    model_files = fs.readdirSync(models_path);

model_files.forEach(function (file) {
    require(models_path + '/' + file);
});

// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));     // Notice because option default will flip in next major; http://goo.gl/bXjyyz

// Bootstrap routes
var routes_path = __dirname + '/routes',
    route_files = fs.readdirSync(routes_path);
route_files.forEach(function (file) {
    var route = require(routes_path + '/' + file);      // Get the route
    app.use('/api', route);                             // This is our route middleware
});

app.all('*', function (req, res) {                      // Catch all for unmatched routes
    res.send({
        result: {
            code: 1,
            message: "Nothing here. Try http://[server]:3000/api/"
        }
    });
});

module.exports = app;