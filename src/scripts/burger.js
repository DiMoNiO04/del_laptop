const BURGER = document.querySelector('.burger__menu');
const HEADER_BODY = document.querySelector('.header__body');

const isContains = (cssClass, event) => event.target.classList.contains(cssClass);

const toggleClass = () => {
  document.body.classList.toggle('lock');
  BURGER.classList.toggle('_active');
  HEADER_BODY.classList.toggle('_active');
};

BURGER.addEventListener('click', toggleClass);

document.addEventListener('click', (event) => {
  if (isContains('header__body', event) || isContains('header__link', event)) {
    toggleClass();
  }
});
