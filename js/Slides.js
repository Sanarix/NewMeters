export default class Slides {
	constructor() {
		this.slideNum = 1;
	}

	renderSlide() {
		switch(this.slideNum)	{
			case 1: return this.slide1();
			case 2: return this.slide2();
			case 3: return this.slide3();
			case 4: return this.slide4();
			default: break;
		}
	}

	countUp() {
		this.slideNum++;
	}

	countDown() {
		if(this.slideNum > 1) {
			this.slideNum--;
		}
	}

	slide1(slideNum = this.slideNum) {
		const header = `
			<h2 class="test-header">Какой тип жилья вас интересует?</h2>
		`;
		const contentAside = `
		<div class="introduce-text">
			Здравствуйте, меня зовут Евгения Казакова.
		</div>
		<div class="introduce-text">
			Я эксперт по подбору ипотеки<br> в новостройках Санкт-Петербурга</div>
		<div class="introduce-text">
			Помогу вам подобрать самые выгодные условия. Покупать квартиру в новостройке выгоднее: ставка по ипотеке на первичное жильё - от 4%.
		</div>
		`;
		const answers = `
		<div class="answer">
		<input type="radio" name="answer" id="answer-1" class="type hide">
		<label for="answer-1">
			<i class="fa-regular fa-square-check"></i>
		</label>
		<p class="answer-text">
			Не определились
		</p>
	</div>
	<div class="answer">
		<input type="radio" name="answer" id="answer-2" class="type hide">
		<label for="answer-2">
			<i class="fa-regular fa-square-check"></i>
		</label>
		<p class="answer-text">
			Строящееся жильё
		</p>
	</div>
	<div class="answer">
		<input type="radio" name="answer" id="answer-3" class="type hide">
	<label for="answer-3">
		<i class="fa-regular fa-square-check"></i>
	</label>
	<p class="answer-text">
		Готовое жильё в новостройке
	</p>
</div>
		`;
		return {header, contentAside, answers, slideNum};
	}

	slide2(slideNum = this.slideNum) {
		const header = `
			<h2 class="test-header">Какая квартира вам нужна?</h2>
		`;
		const contentAside = `
			<div class="introduce-text">
				Рекомендую выбирать два варианта ответа. Если вам нужна студия, рассмотрите еще и однушки, нужна двушка - посмотрите еще и трёшки. Возможно, сервис подберёт более просторную квартиру под ваш бюджет.
			</div>
		`;
		const answers = `
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="answer">
						<input type="radio" name="answer" id="answer-1" class="apartment payment hide">
						<label for="answer-1">
							<i class="fa-regular fa-square-check"></i>
						</label>
						<p class="answer-text">
							Не определились
						</p>
						</div>
						<div class="answer">
						<input type="radio" name="answer" id="answer-2" class="apartment payment hide">
						<label for="answer-2">
							<i class="fa-regular fa-square-check"></i>
						</label>
						<p class="answer-text">
							Студия
						</p>
						</div>
						<div class="answer">
						<input type="radio" name="answer" id="answer-3" class="apartment payment hide">
						<label for="answer-3">
							<i class="fa-regular fa-square-check"></i>
						</label>
						<p class="answer-text">
							Однокомнатная
						</p>
						</div>
					</div>
					<!--col-->
					<div class="col">
						<div class="answer">
							<input type="radio" name="answer" id="answer-4" class="apartment payment hide">
							<label for="answer-4">
								<i class="fa-regular fa-square-check"></i>
							</label>
							<p class="answer-text">
								Двухкомнатная
							</p>
						</div>
						<div class="answer">
							<input type="radio" name="answer" id="answer-5" class="apartment payment hide">
							<label for="answer-5">
								<i class="fa-regular fa-square-check"></i>
							</label>
							<p class="answer-text">
								Трёхкомнатная
							</p>
						</div>
						<div class="answer">
							<input type="radio" name="answer" id="answer-6" class="apartment payment hide">
							<label for="answer-6">
								<i class="fa-regular fa-square-check"></i>
							</label>
							<p class="answer-text">
								Четырёхкомнатная и больше
							</p>
						</div>
					</div>
					<!--col-->
				</div>
			</div>
		`;
		return {header, contentAside, answers, slideNum}; 
	}

	slide3(slideNum = this.slideNum) {
		const header = `
			<h2 class="test-header">Первоначальный взнос</h2>
		`;
		const contentAside = `
			<div class="introduce-text">
				С первоначальным взносом условия лучше, обычно это 10-15%. Иногда получается оформить ипотеку без первоначального взноса, но ставка в этом случае выше.
			</div>
		`;
		const answers = `
		<div class="answer">
			<input type="radio" name="answer" id="answer-1" class="payment hide">
			<label for="answer-2">
				<i class="fa-regular fa-square-check"></i>
			</label>
			<p class="answer-text">
				Без первоначального взноса
			</p>
		</div>
		`; 

		return {header, contentAside, answers, slideNum};
	}

	slide4() {
		return ''
	}
}