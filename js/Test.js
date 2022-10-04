import template from './template.js';
import Slides from './Slides.js';

export default class Test {
	constructor() {
		this.slide = 1;
		this.maxSlide = 6;
		this.type = null;
		this.apartment = null;
		this.contribution = null;
		this.template = template;
		this.Slides = new Slides();
		this.scaleFilling;
		this.scaleFillingPercents = 25;
		this.buttonBack;
		this.buttonBackHide = true;
		this.buttonNext;
		this.buttonsContainerStyle = 'flex-end';
		this.container = document.querySelector('.test');
	}

	renderTest() {
		this.container.innerHTML = this.template(this.Slides.renderSlide());

		this.buttonBack = this.container.querySelector('.test-button_back');
		if(this.buttonBackHide) {
			this.buttonBack.classList.add('hide');
		}else {
			this.buttonBack.classList.remove('hide');
		}

		this.buttonNext = this.container.querySelector('.test-button_next');

		this.scaleFilling = document.querySelector('.scale-filling');
		this.scaleFilling.style.width = this.scaleFillingPercents + '%';
		this.buttonBack.parentElement.style.justifyContent = `${this.buttonsContainerStyle}`;

		this._nextSlide();
		this._previousSlide();
	}

	_nextSlide() {
		this.buttonNext.addEventListener('click', () => {
			if (this.slide <= this.maxSlide) {
				this.slide++;
				this.buttonBackHide = false;
				this.buttonsContainerStyle = ('space-between');
			}

			this.scaleFillingPercents += 25;
			this.Slides.countUp();
			this.renderTest();
			console.log(this.slide);
		})
	}

	_previousSlide() {
		this.buttonBack.addEventListener('click', () => {
			if (this.slide > 1) {
				this.slide--;
			}

			if (this.slide == 1) {
				this.buttonsContainerStyle = 'flex-end';
				this.buttonBackHide = true;
			}
			this.scaleFillingPercents -= 25;
			this.Slides.countDown();
			this.renderTest();
			console.log(this.slide);
		})
	}
}

