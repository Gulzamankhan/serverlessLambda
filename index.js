
var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'GMO_RINGS_POC_FINAL The time in Los Anglis is: ' + currentTime.toString(),
    });
};
