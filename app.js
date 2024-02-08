



function getElement (selection){
  const element = document.querySelector(selection)
  if(element){
    return element
  }
  throw new Error(`please check ${selection}, selector does not exist`)
}


function Gallery(element){
  // convert it to an array using spread operator
this.list =[...document.querySelectorAll('.img')] 
console.log(this.list);
this.modal = getElement('.modal')
this.mainModalImg = getElement('.main-img')
this.modalImages = getElement('.modal-images')
this.closeBtn = getElement('.close-btn')
this.prevBtn = getElement('.prev-btn')
this.nextBtn = getElement('.next-btn')
}


const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))