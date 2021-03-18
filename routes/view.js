const request = require('request');
var express = require('express');
var router = express.Router();
const https = require("https")

router.get('/', function(req, res, next) {
  res.render('view', {symbol:symbol, ask:ask, bid:bid, last:last, low:low, high:high });
});

let ask = "";
let bid="";
let last="";
let low="";
let high="";
let symbol="";

const url = 'https://api.hitbtc.com/api/2/public/ticker/ETHBTC'


const interval = setInterval(() => {
  const promise = new Promise((resolve, reject) => {
    
    https.get(url, response => {
      let data = ""

      // A new chunk of data has been received.
      response.on("data", chunk => {
        data += chunk
      })

      // The whole response has been received, print out the result.
      response.on("end", () => {
        // returns formatted price
        symbol=JSON.parse(data).symbol
        console.log('Symbol: '+symbol)
        
        console.log('')

        ask = JSON.parse(data).ask
        ask = (ask * 100) / 100
        resolve(ask)
        console.log('Ask: '+ask)

        console.log('')

        bid = JSON.parse(data).bid
        bid = (bid * 100) / 100
        resolve(bid)
        console.log('bid: '+bid)

        console.log('')

        last = JSON.parse(data).last
        last = (last * 100) / 100
        resolve(last)
        console.log('last: '+last)
        
        console.log('')

        low = JSON.parse(data).low
        low = (low * 100) / 100
        resolve(low)
        console.log('low: '+low)

        console.log('')

        high = JSON.parse(data).high
        high = (high * 100) / 100
        resolve(high)
        console.log('high: '+high)
        
        console.log('Espacio')

      })
    })
  })
    
  }, 5000)



  
  
  
  
  
 

module.exports = router;


