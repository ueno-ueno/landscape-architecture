'use strict'

// toTop
const toTop = document.querySelector('.toTop')


window.addEventListener('scroll', function(){
  let scrollY = window.scrollY;
  if(scrollY > 900){
    toTop.classList.add('active')
  }else{
    toTop.classList.remove('active')
  }
});


  // fade
gsap.registerPlugin(ScrollTrigger);
const fade = gsap.utils.toArray('.fade')

fade.forEach(el => {
  gsap.fromTo(el, {

y: 40, 
opacity: 0, 
duration: 2, 
ease:'power4.inOut' },

{
y: 0, 
opacity: 1, 
duration: 1.5, 
ease: 'power4.inout',

scrollTrigger: {
  trigger: el,
  start: 'top 70%',
  // markers: true,
  },
});
});


// mainCaption
const paragraph = document.querySelector('.mainCaption')

const textContent = paragraph.textContent;
const newTextContent = [...textContent]
  .map((char) => `<span>${char}</span>`)
  .join("");
  paragraph.innerHTML = newTextContent;

gsap.fromTo(
  ".mainCaption span", // アニメーションさせる要素
  {
    autoAlpha: 0, // アニメーション開始前は透明
    y: 30, // 20px下に移動
  },
  
  {
    autoAlpha: 1, // アニメーション後は出現(透過率0)
    y: 0, // 20px上に移動
    stagger: 0.2, // 0.2秒遅れて順番に再生
    repeatDelay: 1,
    duration: 1,

    scrollTrigger: {
      trigger: '.mainCaption',
      start: 'top 70%',
      // markers: true
    },
  },
);


// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 3000, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints:{
    600: {
      slidesPerView: 3,
    }
  },
  
  slidesPerGroupe: 3,
    autoplay: { // 自動再生
      delay: 1500, // 1.5秒後に次のスライド
      // disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
});