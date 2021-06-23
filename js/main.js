gsap.from('.main__item--1', {
  duration: 1,
  x: -200,
  // ease: "elastic.out(11,0.30.3)",
  delay: 2,
  opacity: 0,
});
gsap.from('.main__item--2', {
  duration: 1,
  x: -200,
  delay: 2.5,
  opacity: 0,
});
gsap.from('.main__item--3', {
  duration: 1,
  x: -300,
  delay: 3,
  opacity: 0,
});
gsap.from('.main__item--4', {
  duration: 1.5,
  x: -400,
  delay: 3.8,
  opacity: 0,
});
gsap.from('.header__logo', {
  duration: 0.8,
  y: -100,
  delay: 1,
  opacity: 0,
  ease: 'power2.out',
});
// gsap.from('.header__menu', {
//   duration: 1,
//   x: 600,
//   delay: 3.5,
//   opacity: 0.5,
//   ease: 'back.out(3)',
// });
gsap.from('.footer__content', {
  duration: 1,
  y: 200,
  delay: 4.5,
  opacity: 0,
  ease: 'power4.out',
});

const menuBtn = document.querySelector('.header__btn');
const list = document.querySelector('.header__menu');
// Preload
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  setTimeout(function () {
    preload.classList.add('xcvas');
  }, 1000);
  menuBtn.classList.remove('active');
  list.classList.remove('menu-open');
});

///Menu

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // menuBtn.classList.toggle('close');
  list.classList.toggle('menu-open');
});
