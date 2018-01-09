
var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'updated GMO_RING_POC The time in Los Angeles is: ' + currentTime.toString(),
    });
};
