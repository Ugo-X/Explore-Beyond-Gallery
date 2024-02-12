function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`please check ${selection}, selector does not exist`);
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  this.modal = getElement(".modal");
  this.modalMainImage = getElement(".main-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
  // bind functions
  // this.openModal = this.openModal.bind(this);
  let self = this;
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);

  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}
Gallery.prototype.openModal = function (selectedImage, list) {
  this.selectedImage = selectedImage;
  // console.log(this);
  this.modal.classList.add("open");
  this.setmainImage(selectedImage);
  this.modalImages.innerHTML = this.list
    .map(function (image) {
      return `<img src = "${
        image.src
      }" data-id = "${image.dataset.id}"  title = "${image.title}"  class = "${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
    })
    .join("");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.nextBtn.addEventListener("click", this.nextBtn);
};

Gallery.prototype.setmainImage = function (selectedImage) {
  this.modalMainImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
  this.modalMainImage.style.height = ` ${30}rem`;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.nextBtn.removeEventListener("click", this.nextBtn);
};
Gallery.prototype.nextImage = function () {};
Gallery.prototype.prevImage = function () {};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
