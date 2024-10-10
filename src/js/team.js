import $ from 'jquery';
import Swiper from "swiper";


export default function Init() {

var curr = "teampage";
var curi = 0;
var cure;
var glo = 0;
var elements;
  var indArray;
  
  var numberOfMembers = 44;



function setInitial(){
    $(".holder").each(function(index){
        $(this).attr("src",process.env.PUBLIC_URL + '/images/team-potos/' + (index + 1) + '.png');
    });
}

function selectBackground(){
    var rand = ((glo++) + elements.length) % numberOfMembers;
    return process.env.PUBLIC_URL + '/images/team-photos/' + (rand + 1) + '.png';
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;

}
  

function loop() {

        
        cure = indArray[curi];
        var holder = elements[cure].querySelector(".holder");
        var holder2 = elements[cure].querySelector(".holder-2");
        holder2.src = holder.src;
        setTimeout(
        function(){
        holder.src = selectBackground();
        holder.classList.add("animated");
        curi++;
        curi  = curi % elements.length;
        setTimeout(function(){
            holder.classList.remove("animated");
            loop();
        },3000);
        },1000);
    }
    
    var advSwiper;

$(document).ready(function () {
    $("body").removeClass("products");
    $(".first-row").removeClass(".home__first-row");

    $(".book__terms__link").click(function () {
        $(".custom-modal-out").addClass("show");
        $(".body").css("overflow-y", "hidden");
    });

    $(".close-icon").click(function () {
        $(".custom-modal-out").removeClass("show");
        $(".body").css("overflow-y", "scroll");
    });
  
   advSwiper = new Swiper(".advisor-swiper", {
     direction: "horizontal",
     slidesPerView: "auto",
     centeredSlides: true,
     simulateTouch: false,
     keyboard: {
       enabled: true,
     },
     navigation: {
       nextEl: ".advisor-swiper-button-next",
       prevEl: ".advisor-swiper-button-prev",
     },
     pagination: {
       el: ".advisor-swiper-pagination",
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
            if (this.navigation && this.navigation.prevEl) {
              this.navigation.prevEl.classList.add("swiper-button-disabled");
            }
          } else {
            this.allowSlidePrev = true;
            if (this.navigation && this.navigation.prevEl) {
              this.navigation.prevEl.classList.remove("swiper-button-disabled");
            }
          }
          if (this.activeIndex == this.slides.length - 2) {
            this.allowSlideNext = false;
            if (this.navigation && this.navigation.nextEl) {
              this.navigation.nextEl.classList.add("swiper-button-disabled");
            }
          } else {
            this.allowSlideNext = true;
            if (this.navigation && this.navigation.nextEl) {
              this.navigation.nextEl.classList.remove("swiper-button-disabled");
            }
          }
        }
        

      }
    },
   });
   if (window.screen.width > 1200) advSwiper.slideNext();

  
    setInitial();
    elements = document.querySelectorAll(".team__team-banner .col");
    indArray = Array(elements.length);
    for(var i=0;i<elements.length;i++)
        indArray[i] = i;
    indArray = shuffle(indArray);
    loop();
});

}