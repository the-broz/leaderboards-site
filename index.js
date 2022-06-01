const express = require('express');
const serveStatic = require('serve-static');
const path = require('path')
const app = express();
const http = require('http');
const server = http.createServer(app);


app.get('/', (req, res) => {
          var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
         console.log('[GET] Homepage\nIP:'+ip);
  res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static(__dirname+'/public'))

app.get('/game/tetrys', (req, res) => {     
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] Tetrys\nIP:'+ip);
  res.sendFile(__dirname + '/tetrys.html');
});

app.get('/submit/:game', (req, res) => {     
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] Sumbit Page\nIP:'+ip+'\nGAME: '+req.params.game);
  res.sendFile(__dirname + '/tetrys.html');
});

app.get('/game/snake', (req, res) => { 
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] Snake\nIP:'+ip);
  res.sendFile(__dirname + '/snake.html');
});

app.get('/game/tunnel', (req, res) => {    
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] Tunnel Glider\nIP:'+ip);
  res.sendFile(__dirname + '/tunnel.html');
});
app.get('/game/cookieclicker', (req, res) => {
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] Cookie Clicker\nIP:'+ip);
  res.sendFile(__dirname + '/cookie.html');
});

app.get('/v1/moderator', (req, res) => {
           var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
          console.log('[GET] MODERATOR PAGE\nIP:'+ip);
  res.sendFile(__dirname + '/moderator.html');
});

app.get('/v2/submit', (req, res) => {
res.sendFile(__dirname + '/submit.html')
});

app.get('/v2/submit/:game', (req, res) => {
res.sendFile(__dirname + '/submit.html')
});

app.get('/v2/game/:game', (req, res) => {
 res.send(req.params)
});

server.listen(process.env.PORT || 3000, () => {
          
  console.log('static + normal server now listening on *:'+(process.env.PORT || 3000));
});