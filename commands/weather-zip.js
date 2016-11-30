
var weather = require('../weather');

var placeName = remainder1;
 
if (!placeName)
{
    sendReply("Please send the keyword 'weather' followed by a place name (e.g. 'weather san francisco').");
}
else
{
    sendReply(weather.getWeather(placeName));
}
