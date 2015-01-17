var Cylon = require('cylon');

//limpiamos gpio para borrar la sesión pasada
var clearGpio = function() { 
var init = function(my){
  console.log("clear gpio ");

  //Activamos las Filas para no tener que activarlas en todas las funciones que animan el arreglo de Leds
  my.led7.turnOn();
  my.led11.turnOn();
  my.led12.turnOn();
  my.led16.turnOn();
  
  my.led29.turnOff();
  my.led31.turnOff();
  my.led33.turnOff();  
  my.led35.turnOff();
  my.led37.turnOff();
  my.led40.turnOff();
  my.led38.turnOff();
  my.led36.turnOff();
};


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
      }
  ,
  work: function(my) {  
    init(my);
  
  }
}).start();


}

//llamada a la función de limpiar Gpio y prende las Filas 
clearGpio();

var test = function(my){
  console.log("Testing ");

//gpioPinesVerde =[29,33,37,38];
//gpioPinesRojos =[31,35,40,36];

  my.led29.turnOn();
  my.led35.turnOn();
  my.led37.turnOn();
  my.led40.turnOn();
  my.led38.turnOn();

};

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
  }
}).start();






	