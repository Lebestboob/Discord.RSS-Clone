if (process.env.DRSS_START === 'bot-web') {
  require('./bot-web.js')
} else if (process.env.DRSS_START === 'web') {
  require('./web.js')
} else {
  require('./bot.js')
}
const express = require('express');

const server = express();
                                 
server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})       

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;
