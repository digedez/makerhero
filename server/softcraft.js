

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





















//limpiamos gpio para borrar la sesión pasada
var test = function(my){
  console.log("Testing ");

//gpioPinesVerde =[29,33,37,38];
//gpioPinesRojos =[31,35,40,36];


for(var i in my.devices) {
  
//  console.log(i);
//  console.log(my.i);
  //i.turnOn();
  

  //for(var j in i) {
  //console.log(j);
  //for(var j in x[i]) {
  //console.log(j + '-->' + cylonJsonObject[i][j]);
  //}
}
  /*
  my.led29.turnOn();
  my.led35.turnOn();
  my.led37.turnOn();
  my.led40.turnOn();
  my.led38.turnOn();
  */
};




