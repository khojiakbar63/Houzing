var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   slidesPerView: 4,
   centeredSlides: true,
   spaceBetween: 30,
   grabCursor: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });

 var testimonialSwiper = new Swiper(".testimonialSwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
    0:{
      slidesPerView: 1
    },
    992:{
      slidesPerView: 2
    },
    1210:{
      slidesPerView: 3
    }
   }
 });

//  Toggle
var userCard = document.getElementsByClassName('user_card');
var userClick = document.getElementById('user_btn');
var toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function(){
  userCard.classList.toggle('active__user__panel')
})

