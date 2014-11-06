/**
 * Created by Joeri Smits on 06/11/2014.
 */
"use strict";

var app = require('../server'); //Require our app

app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function () {
    console.log('FlyHolland server listening on port ' + server.address().port);
});
