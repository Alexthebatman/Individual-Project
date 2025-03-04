
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
  
    arrowRight.addEventListener('click', () => {

      carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });
  
    arrowLeft.addEventListener('click', () => {

      carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });
  });
  
