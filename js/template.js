export default function template( {header, contentAside, answers} ) {
	return `
	<div class="test-container">
	<div class="row">
		<header class="container-fluid header">
			<div class="row test-row align-items-center">
				<div class="col test-col">
					<img src="./img/Vector.svg" alt="Новые метры" class="logo">
				</div>
				<div class="col test-col number-container">
					<img class="img-fluid" src="./img/Phone.png" alt="Телефон">
					<span class="bold-text">+7 812 603-76-40</span>
				</div>
			</div>
		</header>
	</div>
	<div class="test-body">
			<div class="container">
				<div class="row flex-row-reverse">
					<div class="col-12 col-md-4">
						<aside>
							<div class="container test-aside">
								<div class="row">
									<pre class="test-aside_header">Получите <span class="bold-text">БОНУСЫ</span><br>после прохождения теста</pre>
								</div>
								<div class="row">
									<div class="info-frame">
										<h6><span class="bold-text">Ставки от 0,1%</span></h6><br> на весь срок
									</div>
								</div>
								<div class="row">
									<div class="info-frame">
										Ипотека<br><h6><span class="bold-text">без первоначального взноса</span></h6>
									</div>
								</div>
								<div class="row">
									<div class="introduce-frame">
										${contentAside || ''}
								</div>
								<div class="row">
									<div class="row employee-frame">
										<img class="img img-employee" src="./img/Employee.svg" alt="employee">
										<h5><span class="bold-text">Евгения Казакова</span></h5>
										Эксперт по недвижимости Санкт-Петербурга
									</div>
								</div>
							</div>
						</aside>
					</div>
					<!--col-->
					<div class="col-12 col-md-8">
						<div class="test-container">
							<div class="container">
								<div class="container answers-container">
									<div class="row scale">
										<div class="scale-line"><div class="scale-filling"></div></div>
										<span class="scale-text">
											<span class="scale-text_bold">Шаг <span class="step"></span></span> из 4</span>
										</div>
										<div class="row">
											<h2 class="test-header">${header || ''}</h2>
										</div>
										<div class="row">
											<div class="container answers d-flex flex-column">
												${answers || ''}
											</div>
										<!--container-->
								</div>
								<!--row-->
							</div>
							<!--div-->
							<div class="button-block">
								<div class="button-block_col button-block_hint">
									<div class="hint">
										<img src="./img/HandClick.svg" alt="Hand">
										Выберете вариант ответа и нажмите кнопку "Далее" или "Enter"
									</div>
								</div>
								<div class="button-block_col button-block_buttons">
									<button class="button test-button_back hide"> \< Назад<?button>
									<button class="button test-button_next">Далее ></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
	`
}