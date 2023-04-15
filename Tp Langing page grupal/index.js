
//Galeria funciones.
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galeria = document.querySelectorAll('.galeria .img-galeria');

let currentIndex = 0;

function showGaleria() {
  for (let i = 0; i < galeria.length; i++) {
    if (i === currentIndex || i === currentIndex + 1) {
        galeria[i].style.display = 'block';
    } else {
        galeria[i].style.display = 'none';
    }
  }
}

function prev() {
  currentIndex -= 2;
  if (currentIndex < 0) {
    currentIndex = galeria.length - 2;
  }
  showGaleria();
}

function next() {
  currentIndex += 2;
  if (currentIndex >= galeria.length) {
    currentIndex = 0;
  }
  showGaleria();
}

showGaleria();

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);