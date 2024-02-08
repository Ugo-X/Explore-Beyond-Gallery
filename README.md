```javascript
// This function named getElement takes a selector string as its input.
function getElement(selection){
  // It tries to find an element in the HTML document that matches the provided selector.
  const element = document.querySelector(selection);
  // If the element is found (meaning it exists in the HTML document), it returns that element.
  if(element){
    return element;
  }
  // If the element is not found, it throws an error with a message saying which selector could not be found.
  throw new Error(`please check ${selection}, selector does not exist`);
}

// This function named Gallery is created with one parameter called element.
function Gallery(element){
  // It finds all elements with a class of 'img' in the HTML document and stores them as an array in the 'list' property of the Gallery object.
  this.list =[...document.querySelectorAll('.img')];
  // It logs the list of images to the console.
  console.log(this.list);
  // It assigns the element with a class of 'modal' to the 'modal' property of the Gallery object.
  this.modal = getElement('.modal');
  // It assigns the element with a class of 'main-img' to the 'mainModalImg' property of the Gallery object.
  this.mainModalImg = getElement('.main-img');
  // It assigns the element with a class of 'modal-images' to the 'modalImages' property of the Gallery object.
  this.modalImages = getElement('.modal-images');
  // It assigns the element with a class of 'close-btn' to the 'closeBtn' property of the Gallery object.
  this.closeBtn = getElement('.close-btn');
  // It assigns the element with a class of 'prev-btn' to the 'prevBtn' property of the Gallery object.
  this.prevBtn = getElement('.prev-btn');
  // It assigns the element with a class of 'next-btn' to the 'nextBtn' property of the Gallery object.
  this.nextBtn = getElement('.next-btn');
}

// It creates a new Gallery object for nature images by passing the element with a class of 'nature' to the Gallery constructor function.
const nature = new Gallery(getElement('.nature'));
// It creates a new Gallery object for city images by passing the element with a class of 'city' to the Gallery constructor function.
const city = new Gallery(getElement('.city'));
```