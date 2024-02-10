// This function takes a selector string as input and tries to find an element in the HTML document that matches that selector.
function getElement(selection) {
  // It uses the document object to search for the element that matches the selector string.
  const element = document.querySelector(selection);
  // If the element is found (meaning it exists in the HTML document), it returns the element.
  if (element) {
    return element;
  }
  // If the element is not found, it throws an error with a message telling the user to check the selector string.
  throw new Error(`please check ${selection}, selector does not exist`);
}

// This is a constructor function called Gallery. It creates new Gallery objects.
function Gallery(element) {
  // Inside the Gallery function, the 'this' keyword refers to the current Gallery object being created.
  // The 'element' parameter represents the container element for the gallery.
  // It assigns the container element to a property called 'container' in the Gallery object.
  this.container = element;
  // It selects all elements with the class "img" and converts them into an array using the spread operator '...'.
  this.list = [...document.querySelectorAll(".img")];
  // It calls the getElement function to find and assign the modal element to the 'modal' property of the Gallery object.
  this.modal = getElement(".modal");
  // It calls the getElement function to find and assign the main modal image element to the 'mainModalImg' property of the Gallery object.
  this.mainModalImg = getElement(".main-img");
  // It calls the getElement function to find and assign the modal images container element to the 'modalImages' property of the Gallery object.
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  // It calls the getElement function to find and assign the close button element to the 'closeBtn' property of the Gallery object.
  this.closeBtn = getElement(".close-btn");
  // It calls the getElement function to find and assign the previous button element to the 'prevBtn' property of the Gallery object.
  this.prevBtn = getElement(".prev-btn");
  // It calls the getElement function to find and assign the next button element to the 'nextBtn' property of the Gallery object.
  this.nextBtn = getElement(".next-btn");

  // It adds an event listener to the container element.
  this.container.addEventListener(
    "click",
    function (e) {
      // Inside the event listener, 'this' refers to the DOM element that triggered the event.
      // To refer to the current Gallery object, 'this' is bound to the Gallery object using the 'bind' method.
      // It calls the 'openModal' method of the Gallery object when the container element is clicked.
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  ); // 'bind(this)' ensures that 'this' inside the event listener refers to the current Gallery object.
}

// It adds a method called 'openModal' to the prototype of the Gallery object.
Gallery.prototype.openModal = function (selectedImage, list) {
  console.log(selectedImage, list);
  this.setMainImage(selectedImage);
  // Inside the 'openModal' method, 'this' refers to the current Gallery object.
  // It adds the class 'open' to the modal element to display it.
  this.modal.classList.add("open");
};
Gallery.prototype.setMainImage = function (selectedImage) {
  this.mainModalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
this.mainModalImg.style.height = `${30}rem`
};

// It creates two Gallery objects: one for nature images and another for city images.
const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
