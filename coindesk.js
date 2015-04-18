module.exports = {
    getCurrentBitcoinPriceUSD: function() { 
        var url = "http://api.coindesk.com/v1/bpi/currentprice.json";

        var response = httpClient.request(url, {
            method:'GET'
        });
     
        var bitcoinInfo = JSON.parse(response.content);
        return bitcoinInfo.bpi.USD.rate;
    }
};