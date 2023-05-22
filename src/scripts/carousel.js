const SLIDER_CONTAINER = document.querySelector('.goods__carousel');
const IMAGES = document.querySelectorAll('.carousel__slider img');
const SLIDER_LINE = document.querySelector('.carousel__slider');
const DOTS_CONTAINER = document.querySelector('.carousel__dots');
const DOTS = document.querySelectorAll('.carousel__dot');
const BUTTON = document.querySelector('.carousel__button');

let count = 0;
let width;

const rollSlider = () => SLIDER_LINE.style.transform = 'translate(-' + count * width + 'px)';

const setSize = () => {
	width = SLIDER_CONTAINER.offsetWidth;
	SLIDER_LINE.style.width = width * IMAGES.length + 'px';
	IMAGES.forEach(img => {
		img.style.width = width + 'px';
		img.style.height = 'auto';
	})
	rollSlider();
}


BUTTON.addEventListener('click', () => {
	count++;
	if(count >= IMAGES.length) {
		count = 0;
	}
	rollSlider()
	setActiveDot()
})


DOTS_CONTAINER.addEventListener('click', (event) => {
	const NAME = 0;
	const NUMBER = 1;
	if(event.target.id.split('-')[NAME] !== 'dot') {
		return;
	}
	count = event.target.id.split('-')[NUMBER] - 1;
	rollSlider();
	setActiveDot();
})


const addActiveDot = () => DOTS[count].classList.add('carousel__dot_active')

const removeActiveDot = () => {
	DOTS.forEach(dot => {
		dot.classList.remove('carousel__dot_active');
	})	
}

const setActiveDot = () => {
	removeActiveDot();
	addActiveDot();
}


document.addEventListener('DOMContentLoaded', () => {
	setSize();
	setActiveDot();
})

window.addEventListener('resize', setSize);