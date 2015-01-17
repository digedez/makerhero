require('./utils/extensions.js')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var path = require('path');
var Cylon = require('cylon');


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //podriamnos mandar un hola mundo para probar que esta funcionando bien
   //res.send('<h1>Hello world</h1>');
});

/*
io.on('connection', function(socket){
  console.log('a user connected');
});

Nota: Necesitamos agregar a index.html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
*/

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


//Escuchamos el puerto 4000
http.listen(4000, function(){
  console.log('listening on *:4000');
});



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//Animación de la matriz de leds

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    led7: { driver: 'led', pin: 7 },
    led11: { driver: 'led', pin: 11 },
    led12: { driver: 'led', pin: 12 },
    led16: { driver: 'led', pin: 16 },
    led29: { driver: 'led', pin: 29 },
    led31: { driver: 'led', pin: 31 },
    led33: { driver: 'led', pin: 33 },
    led35: { driver: 'led', pin: 35 },
    led37: { driver: 'led', pin: 37 },
    led40: { driver: 'led', pin: 40 },
    led38: { driver: 'led', pin: 38 },
    led36: { driver: 'led', pin: 36 }
  },

  work: function(my) {
    test(my);

  console.log(my.devices.length);
  for (i = 0; i < my.length ; i++) {
      console.log(my[i]);

      //Falta acceder a los elementos de devices, por medio de un indice para poder prenden de forma aleatoria cada uno
      // pero cuando mandamos a imprimir my[i] no parece que sea la forma de acceder a los leds

      
  }

  }
}).start();









