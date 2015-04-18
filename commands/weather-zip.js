
var weather = require('../weather');

var zipcode = word2;
 
if (!/^\d{5}$/.test(zipcode))
{
    sendReply("Please enter a 5 digit US zipcode (e.g. 94111).");
}
else
{
    sendReply(weather.getWeatherForZIPCode(zipcode));
}
