export default function template( {header, contentAside, answers, slideNum} ) {
	return `
	<div class="header container-fluid">
		<div class="container">
			<div>
				<div>
					<img src="./img/Vector.svg" alt="Новые метры" class="logo">
				</div>
			</div>
			<div class="number-container">
				<img class="img-fluid" src="./img/Phone.png" alt="Телефон">
				<span class="bold-text">+7 812 603-76-40</span>
			</div>
		</div>
		<!--container-->
	</div>
	<!--header-->
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
								<!--info-frame-->
							</div>
							<!--row-->
							<div class="row">
									<div class="info-frame">
										Ипотека<br><h6><span class="bold-text">без первоначального взноса</span></h6>
								</div>
								<!--info-frame-->
							</div>
							<div class="row">
								<div class="introduce-frame">
										${contentAside || ''}
								</div>
								<!--introduce-frame-->
							</div>
							<!--row-->
							<div class="row">
								<div class="row employee-frame">
									<img class="img img-employee" src="./img/Employee.svg" alt="employee">
									<h5><span class="bold-text">Евгения Казакова</span></h5>
									Эксперт по недвижимости Санкт-Петербурга
								</div>
								<!--employee-frame>
							</div>
							<!--row-->
						</div>
						<!--test-aside-->
					</div>
					</aside>
				</div>
				<!--col-12 col-md-4-->
				<div class="col-12 col-md-8">
					<div class="test-container">
						<div class="container">
							<div class="container answers-container">
								<div class="row scale">
									<div class="scale-line"><div class="scale-filling"></div></div>
									<span class="scale-text">
										<span class="scale-text_bold">Шаг <span class="step">
										${slideNum}</span></span> из 4</span>
								</div>
								<!--scale-->
								<div class="row">
									<h2 class="test-header">${header || ''}</h2>
								</div>
								<!--row-->
								<div class="row">
									<div class="container answers d-flex flex-column">
										${answers || ''}
									</div>
								</div>
								<!--row-->
							</div>
							<!--answers-container-->
						</div>
						<!--container-->
					</div>
					<!--test-container-->
					<div class="button-block">
						<div class="button-block_col button-block_hint">
							<div class="hint">
								<img src="./img/HandClick.svg" alt="Hand">
								Выберете вариант ответа и нажмите кнопку "Далее" или "Enter"
							</div>
							<!--hint-->
						</div>
						<!--button-block_hint-->
						<div class="button-block_col button-block_buttons">
							<button class="button test-button_back hide"> &lt Назад</button>
							<button class="button test-button_next">Далее ></button>
						</div>
						<!--button-block_buttons-->
					</div>
					<!--button-block-->
				</div>
				<!--col-12 col-md-4-->
			</div>
			<!--row flex-row-reverse-->
		</div>
		<!--container-->
	</div>
	<!--test-body-->
	`
}