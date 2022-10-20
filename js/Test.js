import template from './template.js';
import Slides from './Slides.js';

export default class Test {
	constructor(main) {
		this.main = main;
		this.slide = 1;
		this.maxSlide = 3;
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
		this.buttonExit;
		this.buttonsContainerStyle = 'flex-end';
		this.container = document.querySelector('.test');
		this.savedAnswers = {type: null, apartment: null, payment: null}
	}

	renderTest() {
		this.container.innerHTML = this.template(this.Slides.renderSlide());

		//Скрытие или показание кнопки "Назад" в тесте
		this.buttonBack = this.container.querySelector('.test-button_back');
		if(this.buttonBackHide) {
			this.buttonBack.classList.add('hide');
		}else {
			this.buttonBack.classList.remove('hide');
		}

		this.buttonNext = this.container.querySelector('.test-button_next');
		this.buttonExit = this.container.querySelector('.logo');

		//Заполнение шкалы прогресса
		this.scaleFilling = document.querySelector('.scale-filling');
		this.scaleFilling.style.width = this.scaleFillingPercents + '%';
		this.buttonBack.parentElement.style.justifyContent = `${this.buttonsContainerStyle}`;

		this._nextSlide(this.container);
		this._previousSlide();
		this._exit();
		this._checkAnswers();
		this._chooseListener();
		this._loadResults();
	}

	_nextSlide() {
		this.buttonNext.addEventListener('click', () => {
			if (this.slide <= this.maxSlide) {
				this.slide++;
				this.buttonBackHide = false;
				this.buttonsContainerStyle = 'space-between';
			}

			this.scaleFillingPercents += 25;
			this.Slides.countUp();
			this.renderTest();
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
		})
	}
	//Слушает клики по ответам, отмечая их и стирая старые отметки
	//Сохраняет новый ответ
	_chooseListener() {
		this.container.querySelector('.answers-container').addEventListener('click', (e) => {
			if (e.target.nodeName === 'INPUT') {
				const labels = this.container.querySelectorAll('label');
				for(let label of labels) {
					label.style.color = 'inherit';
				}
				let key = e.target.classList[0];
				let value = e.target.id;
				let label = e.target.parentElement.querySelector('label');
				label.style.color = 'orange';
				this._saveAnswer(key, value);
			}
		})
	}

	_exit() {
		const overlay = document.querySelector('.overlay');
		this.buttonExit.addEventListener('click', () => {
			overlay.classList.add('hide');
			this.main.classList.remove('d-none')
		})
	}
	//Ставит галочку в тесте для сохранённого ответа при его наличии
	_checkAnswers() {
		let answers = this.container.querySelectorAll('input');
		for (let answer of answers) {
			for (let key in this.savedAnswers) {
				if (
					answer.classList[0] === key 
					&& answer.id === this.savedAnswers[key]
					) {
						let container = answer.parentElement;
						let label = container.querySelector('label');
						label.style.color = 'orange';
				}
			}
		}
	}

	_loadResults() {
		if(this.slide > this.maxSlide) {
			this.container.querySelector('.test-body').style.display = 'none';
			console.log('Загружаем результаты');
		}
	}

	get Answers() {
		return this.savedAnswers;
	}

	_saveAnswer(key, value) {
		this.savedAnswers[key] = value;
	}
}

