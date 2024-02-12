// This is the class refactoring

// To refactor the provided code using ES6 class syntax, follow these steps:

// 1. Define the `Gallery` class**: Start by creating a class named `Gallery`.

// 2. Constructor: Move the constructor logic from the original function into the class constructor.

// 3. Instance Properties: Define the instance properties within the constructor, such as `container`, `list`, `modal`, etc.

// 4. Event Listeners**: Move the event listener setup from the constructor to a separate method within the class.

// 5. Instance Methods: Move the instance methods from the prototype into the class definition.

// 6. Binding Methods: Ensure that methods are properly bound to the class instance, especially when they are used as event handlers.




class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    this.modal = this.getElement(".modal");
    this.modalMainImage = this.getElement(".main-img");
    this.imageName = this.getElement(".image-name");
    this.modalImages = this.getElement(".modal-images");
    this.closeBtn = this.getElement(".close-btn");
    this.prevBtn = this.getElement(".prev-btn");
    this.nextBtn = this.getElement(".next-btn");

    this.setupEventListeners();
  }

  getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(`please check ${selection}, selector does not exist`);
  }

  setupEventListeners() {
    this.container.addEventListener("click", (e) => {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    });

    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    this.prevBtn.addEventListener("click", this.prevImage.bind(this));
    this.nextBtn.addEventListener("click", this.nextImage.bind(this));
    this.modalImages.addEventListener("click", this.selectImage.bind(this));
  }

  openModal(selectedImage, list) {
    console.log(selectedImage, list);
    this.modal.classList.add("open");
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map((image) => {
        return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
      })
      .join("");
  }

  setMainImage(selectedImage) {
    this.modalMainImage.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
    this.modalMainImage.style.height = `30rem`;
  }

  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.selectedImage);
  }

  nextImage() {
    const selectedImg = this.modalImages.querySelector(".selected");
    const nextElement =
      selectedImg.nextElementSibling || this.modalImages.firstElementChild;
    selectedImg.classList.remove("selected");
    nextElement.classList.add("selected");
    this.setMainImage(nextElement);
  }

  prevImage() {
    const selectedImg = this.modalImages.querySelector(".selected");
    const prevElement =
      selectedImg.previousElementSibling ||
      this.modalImages.lastElementChild;
    selectedImg.classList.remove("selected");
    prevElement.classList.add("selected");
    this.setMainImage(prevElement);
  }

  selectImage(e) {
    if (e.target.classList.contains("modal-img")) {
      const targetImage = e.target;
      this.setMainImage(targetImage);
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");
      targetImage.classList.add("selected");
    }
  }
}




const nature = new Gallery(document.querySelector(".nature"));
const city = new Gallery(document.querySelector(".city"));



// Things to note below

// In this refactored version, we've encapsulated all the functionality related to the gallery within the `Gallery` class, making it easier to manage and maintain. We've also made use of arrow functions to maintain the context of `this` and avoid the need for explicit binding within the constructor. Additionally, we've utilized template literals for cleaner string interpolation when generating HTML content.


// In the provided example, the `Gallery` class contains the core functionality related to the gallery, including:

// 1. **Constructor Functionality**: Initialization of the gallery properties like `container`, `list`, `modal`, `modalMainImage`, `imageName`, `modalImages`, `closeBtn`, `prevBtn`, and `nextBtn`.

// 2. **Event Listeners**: The event listener for the `click` event on the `container` element, which triggers the `openModal` method when an image is clicked, is inside the class.

// 3. **Gallery Methods**: Methods like `openModal`, `setMainImage`, `closeModal`, `nextImage`, `prevImage`, and `selectImage` are defined within the class to handle various aspects of gallery functionality.

// However, some aspects are not inside the class:

// 1. **Utility Function**: The `getElement` function, which is a utility function to fetch DOM elements, is defined outside the class. While it's related to the gallery's functionality, it's a general-purpose utility function that could be used in other parts of the application as well.

// 2. **Gallery Instantiation**: The instantiation of gallery instances (`nature` and `city`) is done outside the class. This is typical in JavaScript where you instantiate objects based on a class constructor.

// Overall, the class encapsulates the core gallery functionality, while utility functions and instantiation occur outside the class. This separation helps maintain clarity and modularity in the codebase.