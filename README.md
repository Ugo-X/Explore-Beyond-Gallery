WHAT IS MY PROJECT ABOUT?

 My project is a versatile gallery component designed to showcase images in a modal interface. It features functionalities like opening and closing the modal, navigating between images, and selecting specific images within the modal. Through the use of event listeners, users can interact seamlessly with the gallery, enjoying a smooth and intuitive experience as they explore the image collection.



HOW DOES MY PROJECT WORK?


class Gallery {
  constructor(element) {
    // Initialize properties based on the provided element
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    this.modal = this.getElement(".modal");
    this.modalMainImage = this.getElement(".main-img");
    this.imageName = this.getElement(".image-name");
    this.modalImages = this.getElement(".modal-images");
    this.closeBtn = this.getElement(".close-btn");
    this.prevBtn = this.getElement(".prev-btn");
    this.nextBtn = this.getElement(".next-btn");

    // Call setupEventListeners method to attach event listeners
    this.setupEventListeners();
  }

  // Method to get DOM elements by selector
  getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    // Throw an error if the element doesn't exist
    throw new Error(`please check ${selection}, selector does not exist`);
  }

  // Method to attach event listeners to various elements
  setupEventListeners() {
    // Click event listener for the container element
    this.container.addEventListener("click", (e) => {
      // Open modal when an image is clicked
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    });

    // Click event listeners for close, previous, and next buttons
    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    this.prevBtn.addEventListener("click", this.prevImage.bind(this));
    this.nextBtn.addEventListener("click", this.nextImage.bind(this));
    
    // Click event listener for modal images
    this.modalImages.addEventListener("click", this.selectImage.bind(this));
  }

  // Method to open the modal and display selected image
  openModal(selectedImage, list) {
    this.modal.classList.add("open");
    this.setMainImage(selectedImage);
    // Generate HTML for modal images based on the list
    this.modalImages.innerHTML = list
      .map((image) => {
        return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
      })
      .join("");
  }

  // Method to set the main image and its related information
  setMainImage(selectedImage) {
    this.modalMainImage.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
    this.modalMainImage.style.height = `30rem`;
  }

  // Method to close the modal and remove event listeners
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.selectedImage);
  }

  // Method to display the next image in the modal
  nextImage() {
    const selectedImg = this.modalImages.querySelector(".selected");
    const nextElement =
      selectedImg.nextElementSibling || this.modalImages.firstElementChild;
    selectedImg.classList.remove("selected");
    nextElement.classList.add("selected");
    this.setMainImage(nextElement);
  }

  // Method to display the previous image in the modal
  prevImage() {
    const selectedImg = this.modalImages.querySelector(".selected");
    const prevElement =
      selectedImg.previousElementSibling ||
      this.modalImages.lastElementChild;
    selectedImg.classList.remove("selected");
    prevElement.classList.add("selected");
    this.setMainImage(prevElement);
  }

  // Method to select an image within the modal
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

// Create instances of the Gallery class for nature and city galleries
const nature = new Gallery(document.querySelector(".nature"));
const city = new Gallery(document.querySelector(".city"));
```

Explanation:
1. The `Gallery` class is defined to manage a gallery component on a web page.
2. In the constructor, DOM elements are initialized based on the provided element, and event listeners are set up using the `setupEventListeners` method.
3. The `getElement` method is used to retrieve DOM elements by selector, throwing an error if the element doesn't exist.
4. Event listeners are attached to the container, close button, previous button, next button, and modal images to handle various interactions.
5. Methods like `openModal`, `setMainImage`, `closeModal`, `nextImage`, `prevImage`, and `selectImage` are defined to perform specific tasks like opening/closing the modal, navigating between images, and updating the main image display.
6. Instances of the `Gallery` class are created for nature and city galleries, each initialized with the respective






NB!!!!!!! for the conditional statment while trying to return the html of the modal images the logic explanation is below.


```javascript
class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"
```

This line of code is used to dynamically assign a CSS class to an HTML element based on a condition. Here's a detailed explanation:

1. **class=**: This is an HTML attribute used to specify one or more class names for an element. Classes are used in CSS to apply styling to elements.

2. **`${...}`**: This is a template literal syntax in JavaScript, indicated by backticks (`), which allows embedding expressions inside a string.

3. **selectedImage.dataset.id**: This accesses the `id` attribute of the `dataset` property of the `selectedImage` element. The `dataset` property provides access to custom data attributes (prefixed with `data-`) of an element.

4. **image.dataset.id**: Similar to the previous expression, this accesses the `id` attribute of the `dataset` property of the `image` object, which represents an image in the `list` array.

5. **? "modal-img selected" : "modal-img"**: This is a ternary operator, which is a concise way to write an if-else statement. It consists of three parts:
   - The condition (`selectedImage.dataset.id === image.dataset.id`): If this condition evaluates to `true`, the expression before the colon (`:`) is returned; otherwise, the expression after the colon is returned.
   - If the condition is true, `"modal-img selected"` is returned. This means the element will have both the classes `modal-img` and `selected`.
   - If the condition is false, `"modal-img"` is returned. This means the element will only have the class `modal-img`.

In summary, this line of code dynamically assigns the class `"modal-img selected"` to the HTML element if the `id` of the `selectedImage` matches the `id` of the `image` being processed in the `map` function. Otherwise, it assigns the class `"modal-img"`. This technique is commonly used in JavaScript frameworks like React or Vue.js for conditional rendering and styling.



The reasons we remove event listeners are as follows !!!!!!!
THE REASONS WE REMOVE EVENT LISTENERS ARE AS FOLLOWS !!!!!!!

In the provided code, the event listeners added for the close button (`closeBtn`), previous button (`prevBtn`), and next button (`nextBtn`) are removed in the `closeModal` method.

Here's why we want to remove the event listeners:

1. **Preventing Memory Leaks**: When you add event listeners in JavaScript, they continue to exist until explicitly removed. If you have a situation where the Gallery instances are created and destroyed dynamically (for example, switching between different galleries), not removing event listeners can lead to memory leaks. Removing event listeners ensures that resources associated with the event listeners are released when they are no longer needed, preventing memory leaks.

2. **Avoiding Unexpected Behavior**: If event listeners are not removed, they may continue to respond to events even when the corresponding elements are no longer part of the DOM or when the instance of the Gallery is destroyed. This can lead to unexpected behavior in the application. By removing event listeners, you ensure that they are only active when the Gallery is visible and functional.

In summary, removing event listeners is important for managing resources efficiently and preventing unexpected behavior in the application. It ensures that event handlers are properly cleaned up when they are no longer needed, promoting better performance and stability.