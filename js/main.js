'use strict'
import Test from './Test.js';

const test = new Test();
const overlay = document.querySelector('.overlay');
const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
	overlay.classList.remove('hide');
	test.renderTest();
});
