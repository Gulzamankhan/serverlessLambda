
var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'GMO_RINGS-POC_CI_CD_Pipeline The time in Los Angeles is: ' + currentTime.toString(),
    });
};
