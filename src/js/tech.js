import $ from "jquery";
import Swiper from "swiper";

export default function Init() {
  var techSwiper;
  $(document).ready(function () {
    $("body").removeClass("products");
    $(".first-row").removeClass("home__first-row");

    $(".book__terms__link").click(function () {
      $(".custom-modal-out").addClass("show");
      $(".body").css("overflow-y", "hidden");
    });

    $(".close-icon").click(function () {
      $(".custom-modal-out").removeClass("show");
      $(".body").css("overflow-y", "scroll");
    });


    //initialize swiper when document ready
   
    techSwiper = new Swiper(".tech-swiper", {
      direction: "horizontal",
      slidesPerView: "auto",
      centeredSlides: true,
      simulateTouch: false,
      autoHeight: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".tech-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          if (
            (index >= 1 && index <= this.slides.length - 2) ||
            1200 > window.screen.width
          )
            return '<span class="' + className + '"></span>';
          else return '<span  class="' + className + ' hidden-bullet"></span>';
        },
      },

      on: {
        slideChange: function () {
          if (window.screen.width > 1200) {
            if (this.activeIndex == 1) {
              this.allowSlidePrev = false;
              //this.navigation.prevEl.classList.add("swiper-button-disabled");
            } else {
              this.allowSlidePrev = true;
             // this.navigation.prevEl.classList.remove("swiper-button-disabled");
            }
            if (this.activeIndex == this.slides.length - 2) {
              this.allowSlideNext = false;
             // this.navigation.nextEl.classList.add("swiper-button-disabled");
            } else {
              this.allowSlideNext = true;
             // this.navigation.nextEl.classList.remove("swiper-button-disabled");
            }
          }
        },
      },
    });
    if (window.screen.width > 1200) techSwiper.slideNext(0);


  });

}
