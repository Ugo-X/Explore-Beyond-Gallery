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
        this.openModal(e.target,this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  console.log(selectedImage, list);
  this.modal.classList.add("open");
  this.setmainImage(selectedImage)
};

Gallery.prototype.setMainImage = function(selectedImage){
this.modalMainImage.src = selectedImage.src
this.imageName.textContent = selectedImage.title
this.modalMainImage.style.height =` ${40}rem`
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
