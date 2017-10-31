'use strict';

var generated;
var selected;
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArray = [];
var genNum1;
var genNum2;
var genNum3;

// constructor function
function Image(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.generated = 0;
  this.selected = 0;
}

// construction of new image objects that are pushed to images array
for (var i = 0; i < images.length; i++) {
  imageArray.push(new Image(images[i]));
}
console.log(imageArray);

// random number generator to be used to select random images
function rNJesus() {
  var rng = Math.floor(Math.random() * imageArray.length);
  console.log('random #', rng);
  // loop to allow rNJesus to reiterate until desired conditions are met, i.e. no 3 values from numbersGenerator() being the same
  // while (genNum1 === genNum2 || genNum2 === genNum3 || genNum1 === genNum3) {
  //   rng = Math.floor(Math.random() * imageArray.length);
  // }
  return rng;
}

// generate 3 numbers to map to arrays for image selection
function numbersGenerator() {
  genNum1 = rNJesus();
  genNum2 = rNJesus();
  genNum3 = rNJesus();
  console.log('number1', genNum1);
  console.log('number2', genNum2);
  console.log('number3', genNum3);
  while (genNum1 === genNum2) {
    console.log('rerolling number2:', genNum2);
    genNum2 = rNJesus();
    console.log('re-rolled number2 to:', genNum2);
  }
  while (genNum1 === genNum3 || genNum2 === genNum3) {
    console.log('rerolling number3:', genNum3);
    genNum3 = rNJesus();
    console.log('re-rolled to number3:', genNum3);
  }
}

numbersGenerator();



// adding event listener
// for (var i = 0; i < imageArray.length; i++) {
//   imageArray[i].addEventListener('click', function{
//
//   })
// }
