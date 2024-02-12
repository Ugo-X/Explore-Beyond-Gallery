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
  //   bind functions

  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
  //   bind functions
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.selectImage = this.selectImage.bind(this);
}

Gallery.prototype.openModal = function (selectedImage, list) {
  console.log(selectedImage, list);
  this.modal.classList.add("open");
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src = "${
        image.src
      }" title = "${image.title}" data-id = "${image.dataset.id}" class = "${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
    })
    .join("");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.modalImages.addEventListener("click", this.selectImage);
};
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalMainImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
  this.modalMainImage.style.height = ` ${30}rem`;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.selectedImage);
};
Gallery.prototype.nextImage = function () {
  //   console.log(this);
  const selectedImg = this.modalImages.querySelector(".selected");
  const nextElement =
    selectedImg.nextElementSibling || this.modalImages.firstElementChild;
  selectedImg.classList.remove("selected");
  nextElement.classList.add("selected");
  this.setMainImage(nextElement);
};
Gallery.prototype.prevImage = function () {
  const selectedImg = this.modalImages.querySelector(".selected");
  const prevElement =
    selectedImg.previousElementSibling || this.modalImages.lastElementChild;
  selectedImg.classList.remove("selected");
  prevElement.classList.add("selected");
  this.setMainImage(prevElement);
};

Gallery.prototype.selectImage = function (e) {
  if (e.target.classList.contains("modal-img")) {
    const targetImage = e.target;
    this.setMainImage(targetImage);
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    targetImage.classList.add("selected");
  }
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
