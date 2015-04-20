/*
 * Example CommonJS module that exports functionality by adding properties 
 * to the `exports` variable.
 */

exports.getWeatherForZIPCode = function(zipcode) { 
    var url = "http://weather.yahooapis.com/forecastrss";
    var response = httpClient.request(url, {
        method: 'GET',
        params: {p: zipcode}
    });
     
    var parser = new DOMParser();
    var dom = parser.parseFromString(response.content, 'text/xml');
     
    var WEATHER_API_NS = "http://xml.weather.yahoo.com/ns/rss/1.0";
     
    var conditionElem = dom.getElementsByTagNameNS(WEATHER_API_NS, 'condition')[0];
    var locationElem = dom.getElementsByTagNameNS(WEATHER_API_NS, 'location')[0];
     
    if (!locationElem)    
    {
        return "Sorry, we couldn't find the zipcode " + zipcode + ".";
    }
     
    var location = locationElem.getAttribute("city") + 
        ", " + locationElem.getAttribute("region");
         
    var conditions = conditionElem.getAttribute("text");
     
    var temp = conditionElem.getAttribute("temp");
                 
    return "It is currently "+temp+" degrees Fahrenheit and "+
        conditions+" in " + location + ".";
};