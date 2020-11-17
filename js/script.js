document.addEventListener('DOMContentLoaded', () => {

//MODAL FUNCTION
function modalActivation(images, modal, modalImg, modalBackground, modalClose){

  images.forEach( el => {
    el.addEventListener('click', () => {
      
      modalImg.src = el.src;
      modalImg.alt = el.alt;
      modal.classList.add("is-active");

      modalBackground.addEventListener('click', () => {
        modal.classList.remove("is-active");
      })

      modalClose.addEventListener('click', () => {
        modal.classList.remove("is-active");
      })
      
    })
  })

}

//RELOAD ON RESIZE (FOR CAROUSEL)
window.onresize = function(){ location.reload(); }

//BURGER 
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
if ($navbarBurgers.length > 0) {
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      const target = el.dataset.target;
      const $target = document.getElementById(target);

      el.classList.toggle('is-active');
      $target.classList.toggle('is-active'); 
    });
  });
}

//CLASSIC CAROUSEL
bulmaCarousel.attach('#carousel-home', {
  slidesToScroll: 1,
  slidesToShow: 4,
  pagination: false,
  autoplay: true,
  duration: 300,
  breakpoints: 
    [{ 
      changePoint: 600, 
      slidesToShow: 1, 
      slidesToScroll: 1 
    }, { 
      changePoint: 800, 
      slidesToShow: 2, 
      slidesToScroll: 1 
    }, { 
      changePoint: 1216, 
      slidesToShow: 3, 
      slidesToScroll: 1 
    } ]

});

//MODAL CAROUSEL
var carouselImages = document.querySelectorAll('#carousel-home img');
var modal = document.getElementById("modal-carousel");
var modalImg = document.querySelector('#modal-carousel img');
var modalBackground = document.querySelector('#modal-carousel .modal-background');
var modalClose = document.querySelector('#modal-carousel .modal-close');
modalActivation(carouselImages, modal, modalImg, modalBackground, modalClose);


//MODAL GALLERY
var galleryImages = document.querySelectorAll('.gallery img');
var modal = document.getElementById("modal-gallery");
var modalImg = document.querySelector('#modal-gallery img');
var modalBackground = document.querySelector('#modal-gallery .modal-background');
var modalClose = document.querySelector('#modal-gallery .modal-close');
modalActivation(galleryImages, modal, modalImg, modalBackground, modalClose);


});





