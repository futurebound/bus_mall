'use strict';

var generations = 0;
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
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
  this.path = './img/' + name + '.jpg';
  this.generated = 0;
  this.selected = 0;
}


// construction of new image objects that are pushed to images array
for (var i = 0; i < images.length; i++) {
  imageArray.push(new Image(images[i]));
}
console.log(imageArray);


// THIS A HELPER FUNCTION bruuUUUHHHHHHV b/c it doesnt add to constructor but helps
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

// variables for image placement on screen

//function to display 3 images on screen from generated numbers
function displayImages() {
  addEventListeners();
  if (generations < 25) {
    numbersGenerator();
    left.setAttribute('src', imageArray[lastGen1].path);
    center.setAttribute('src', imageArray[lastGen2].path);
    right.setAttribute('src', imageArray[lastGen3].path);
    imageArray[lastGen1].generated++;
    imageArray[lastGen2].generated++;
    imageArray[lastGen3].generated++;
  } else {
    removeEventListeners();
    displayStatistics();
  }
}

displayImages();


// checks the image clicked on to see if its source path is the same as any image in the imageArray
function selectedData(event) {
  event.preventDefault();
  console.log('I selected this image:', this.getAttribute('src'));
  for (var i = 0; i < imageArray.length; i++) {
    if (this.getAttribute('src') === imageArray[i].path) {
      imageArray[i].selected++;
    }
  }
  // adds total amount of
  generations++;
  console.log('generation #:', generations);
  displayImages();
}

function displayStatistics() {
  var statistics = document.getElementById('statistics');
  var imageStatistics;
  for (var i = 0; i < imageArray.length; i++) {
    imageStatistics = document.createElement('li');
    imageStatistics.innerHTML = imageArray[i].selected + ' votes for ' + imageArray[i].name;
    statistics.appendChild(imageStatistics);
  }
}

function addEventListeners() {
  var left = document.getElementById('left');
  left.addEventListener('click', selectedData);
  var center = document.getElementById('center');
  center.addEventListener('click', selectedData);
  var right = document.getElementById('right');
  right.addEventListener('click', selectedData);
}

function removeEventListeners() {
  left.removeEventListener('click', selectedData);
  center.removeEventListener('click', selectedData);
  right.removeEventListener('click', selectedData);
  left.style.visibility = 'hidden';
  center.style.visibility = 'hidden';
  right.style.visibility = 'hidden';
}
