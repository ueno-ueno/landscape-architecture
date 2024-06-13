'use strict'
const header = document.querySelector('.headerInner')
const head = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const hamburgerArea = document.querySelector('.hamburgerArea')

hamburger.addEventListener('click', function(){
  head.classList.toggle('active');
})


// window.addEventListener('scroll', function(){
//   let scrollY = window.scrollY;
//   if(scrollY < 800){
// header.style.opacity = '1'
// header.style.visibility = 'visible'
// hamburgerArea.style.display = 'none'

//   }else{
//     header.style.opacity = '0'
//     header.style.visibility = 'hidden'
//     hamburgerArea.style.display = 'block'
//   }
//   console.log(this.window.scrollY)
// });

// fade
gsap.registerPlugin(ScrollTrigger);
const fade = gsap.utils.toArray('.fade')
console.log(fade)

fade.forEach(el => {
  gsap.fromTo(el, {

y: 20, 
opacity: 0, 
duration: 2, 
ease:'power4.Out' },

{
y: 0, 
opacity: 1, 
duration: 3, 
ease: 'power4.out',

scrollTrigger: {
  trigger: el,
  start: 'top 70%',
  // markers: true,
  },
});
});



const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 3000, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1,
  breakpoints:{
    640: {
      slidesPerView: 2,
    }
  },
  slidesPerGroupe: 2,
    autoplay: { // 自動再生
      delay: 1500, // 1.5秒後に次のスライド
      // disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
});