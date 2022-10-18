'use strict'
import Test from './Test.js';

const overlay = document.querySelector('.overlay');
const startButton = document.querySelector('.start-button');
const mainContainer = document.querySelector('.main');
const test = new Test(mainContainer);

startButton.addEventListener('click', () => {
	mainContainer.classList.add('d-none')
	overlay.classList.remove('hide');
	test.renderTest();
	startButton.innerText = 'Продолжить тест';
});
