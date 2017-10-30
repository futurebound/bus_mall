'use strict';

var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArray = [];

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

function rnjesus() {
  var rng = Math.floor(Math.random() * imageArray.length);
  console.log('random #', rng);
  return rng;
}

rnjesus();
