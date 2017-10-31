'use strict';

var generated;
var selected;
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArray = [];
var genNum1;
var genNum2;
var genNum3;
var lastGen1;
var lastGen2;
var lastGen3;

// constructor function
function Image(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.generated = 0;
  this.selected = 0;
}

// Image.prototype.justShown = function() {
//
// }

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
  while (rng === lastGen1 || rng === lastGen2 || rng === lastGen3) {
    rng = Math.floor(Math.random() * imageArray.length);
  }
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
  while (genNum1 === genNum2) { // checks if genNum2 is the same as the first, and rerolls if it is
    console.log('rerolling number2:', genNum2);
    genNum2 = rNJesus();
    console.log('re-rolled number2 to:', genNum2);
  }
  while (genNum1 === genNum3 || genNum2 === genNum3) { // checks if 3 is = to 1 or 2, and rerolls if it is
    console.log('rerolling number3:', genNum3);
    genNum3 = rNJesus();
    console.log('re-rolled to number3:', genNum3);
  }
  lastGen1 = genNum1;
  lastGen2 = genNum2;
  lastGen3 = genNum3;
}

for (var i = 0; i < 25; i++) {
  var selectedArray = [];
  numbersGenerator();
  selectedArray.push = lastGen1;
  selectedArray.push = lastGen2;
  selectedArray.push = lastGen3;
}


numbersGenerator();
console.log('end of 1st round');
numbersGenerator();
console.log('end of 2nd round');
numbersGenerator();
console.log('end of 3rd round');
numbersGenerator();
console.log('end of 4rd round');
numbersGenerator();
console.log('end of 5rd round');
numbersGenerator();
console.log('end of 6rd round');
numbersGenerator();
console.log('end of 7rd round');
numbersGenerator();
console.log('end of 8rd round');

// function to send images to page


// adding event listener
// for (var i = 0; i < imageArray.length; i++) {
//   imageArray[i].addEventListener('click', function{
//
//   })
// }
