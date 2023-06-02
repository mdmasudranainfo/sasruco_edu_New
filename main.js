// Swippwr Js

var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    740: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const Collapse = document.getElementById("Collapse");

const menuUL = document.getElementById("menuUL");

Collapse.addEventListener("click", () => {
  menuUL.classList.toggle("hidden");
});

$(".counter").counterUp({
  delay: 50,
  time: 1000,
});

// scroll background color
$(window).scroll(function () {
  $("nav").toggleClass("addBg", $(this).scrollTop() > 50);
});

// document.getElementById("accordion").addEventListener("click", () => {
//   const OffOn = document.getElementById("OffOn");
//   OffOn.classList.toggle("hidden");
//   // OffOn.classList.toggle("opacity-0");
// });

//

// contact page js accordtion with
