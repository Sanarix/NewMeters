'use strict'
const overlay = document.querySelector('.overlay');
const testField = document.querySelector('.test');
const startButton = document.querySelector('.start-button');

class Test {
	constructor() {
		this.type = null;
		this.apartment = null;
		this.contribution = null;
	}

	showTest(){}

	nextSlide(){}

	previousSlide(){}
}

startButton.addEventListener('click', () => {
	overlay.classList.remove('hide');
	let test = new Test();
	test.start();
});

function startTest() {

}