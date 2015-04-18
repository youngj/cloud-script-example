
var command = (word1 || "").toLowerCase();

switch (word1)
{
    case "hello":
    case "hi":
        require("./commands/hello");
        break;
    case "join":
    case "subscribe":
        require("./commands/subscribe");
        break;
    case "stop":
    case "unsubscribe":
    case "cancel":
        require("./commands/unsubscribe");
        break;
    case "bitcoin":
        var coindesk = require('./coindesk');
        sendReply("1 BTC = $" + coindesk.getCurrentBitcoinPriceUSD());
        break;
    case "weather":
        require("./commands/weather-zip");
        break;        
    default:
        console.log("Unknown keyword: " + word1);
}
