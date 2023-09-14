/* Name: Diya Parmar
   my id: dparmar14@myseneca.ca
   student number:172444218
   
   */




console.log('Hello World');

const EventEmitter = require('events');


const trafficLightEmitter = new EventEmitter();


const colors = ['Red', 'Yellow', 'Green'];

let currentIndex = 0;


function changeColor() {  // Changes colour of the traffic light
  const currentColor = colors[currentIndex];
  console.log(currentColor);
  trafficLightEmitter.emit('colorChange', currentColor);

  currentIndex = (currentIndex + 1) % colors.length;

  const delay = currentColor === 'Red' ? 5000 : currentColor === 'Yellow' ? 2000 : 5000;
  setTimeout(changeColor, delay);
}


changeColor();


trafficLightEmitter.on('colorChange', (currentColor) => {
  console.log('The light just changed to', currentColor);
});