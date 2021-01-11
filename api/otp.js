const fetch = require('node-fetch');

module.exports = async (request, response) => {
  var chatid = request.query.chat;

var data = "chat_id=" + chatid + "&text="
data = data + Math.floor(Math.random() * (9999 - 1000) ) + 1000;
      
var url = "https://api.telegram.org/bot<token>/sendMessage?" + data
 
    var req = await fetch(url);
    var res = await req.text();
    response.send(res);

  
}
