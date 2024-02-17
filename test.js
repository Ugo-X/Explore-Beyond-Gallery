Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");  // Remove the "open" class from the modal to close it
  this.closeBtn.removeEventListener("click", this.closeModal);  // Remove event listener for close button
  this.nextBtn.removeEventListener("click", this.nextImage);  // Remove event listener for next button
  this.prevBtn.removeEventListener("click", this.prevImage);  // Remove event listener for previous button
  this.modalImages.removeEventListener("click", this.selectedImage);  // Remove event listener for modal images
};

Gallery.prototype.nextImage = function () {
  const selectedImg = this.modalImages.querySelector(".selected");  // Get the currently selected image
  const nextElement = selectedImg.nextElementSibling || this.modalImages.firstElementChild;  // Get the next image or the first image if there's none
  selectedImg.classList.remove("selected");  // Remove the "selected" class from the current image
  nextElement.classList.add("selected");  // Add the "selected" class to the next image
  this.setMainImage(nextElement);  // Set the main image to be displayed
};

Gallery.prototype.prevImage = function () {
  const selectedImg = this.modalImages.querySelector(".selected");  // Get the currently selected image
  const prevElement = selectedImg.previousElementSibling || this.modalImages.lastElementChild;  // Get the previous image or the last image if there's none
  selectedImg.classList.remove("selected");  // Remove the "selected" class from the current image
  prevElement.classList.add("selected");  // Add the "selected" class to the previous image
  this.setMainImage(prevElement);  // Set the main image to be displayed
};

Gallery.prototype.selectImage = function (e) {
  if (e.target.classList.contains("modal-img")) {  // Check if the clicked element is a modal image
    const targetImage = e.target;  // Get the clicked image
    this.setMainImage(targetImage);  // Set the main image to be displayed
    const selected = this.modalImages.querySelector(".selected");  // Get the currently selected image
    selected.classList.remove("selected");  // Remove the "selected" class from the current image
    targetImage.classList.add("selected");  // Add the "selected" class to the clicked image
  }
};

const nature = new Gallery(getElement(".nature"));  // Create a new Gallery instance for nature images
const city = new Gallery(getElement(".city"));  // Create a new Gallery instance for city images




//   The project is a gallery that allows users to view images in a modal window. When an image is clicked, it opens in the modal along with navigation buttons to view the previous and next images. The Gallery class manages the modal functionality, including opening and closing the modal, navigating between images, and selecting images. It sets up event listeners for user interactions and updates the display accordingly. Each method in the class handles a specific aspect of the gallery functionality, making the code modular and easier to maintain.

