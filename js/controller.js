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
 });