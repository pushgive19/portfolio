
var mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.main-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },

})


var bgSwiper = new Swiper('.bg-swiper', {
  // Optional parameters
  loop: true,
//  cssMode:{
  //  simulateTouch:false,
//  },
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.bg-next',
    prevEl: '.bg-prev',
  },

})

const mainBtnPrev = document.querySelector(".main-prev");
const mainBtnNext = document.querySelector(".main-next");

function clickPrev(){
  setTimeout(function(){
    bgSwiper.slidePrev(300,true);
  }, 100)
}
function clickNext(){
  setTimeout(function(){
    bgSwiper.slideNext(300,true);
  }, 100)
}

mainBtnPrev.addEventListener("click", clickPrev);
mainBtnNext.addEventListener("click", clickNext);

