const express = require('express');
const app = express();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));

http.listen(port, () => console.log(`listening on port ${port}`));

io.on('connection', function(socket) {
  console.log('socket connection');
});

/*
* Note: for express http requiring stuff this
* stackoverflow submission is helpful
* https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
*/
