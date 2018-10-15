<!-- ads block -->
<div class="ads" id="ads-js">
	<div class="ads__block">
		<a  href="#" class="ads__block-img">
			<img src="img/test1.jpg" alt="img">
			<img src="img/minislide2.jpg" alt="img">
			<img src="img/minislide1.jpg" alt="img">
		</a>
		<div class="ads__block-text">
			<div class="ads-vip-line"></div>
			<div class="ads-vip">
				<p>VIP</p>
			</div>
			<h3>
				<a href="#">Продам Беху, заебала...</a>
			</h3>
			<p>
				<span>Ровеньки /</span>
				<span>Транспорт</span>
			</p>
			<p>
				<span>24 сентября 2018г.</span>
				<span class="ads-price">1.13 руб.</span>
			</p>
			<i class="icon-like-empty"></i>
		</div>
	</div>

	<div class="ads__block">
		<a href="#" class="ads__block-img">
			<img src="img/minislide2.jpg" alt="img">
			<img src="img/test1.jpg" alt="img">
		</a>
		<div class="ads__block-text bg-ads-text">
			<h3>
				<a href="#">Куплю замок с привидениями</a>
			</h3>
			<p>
				<span>Антрацит /</span>
				<span>Недвижимость</span>
			</p>
			<p>
				<span>25 сентября 2018г.</span>
				<span class="ads-price">3 руб.</span>
			</p>
			<i class="icon-like-empty"></i>
		</div>
	</div>

	<div class="ads__block">
		<a href="#" class="ads__block-img">
			<img src="img/minislide2.jpg" alt="img">
		</a>
		<div class="ads__block-text">
			<h3>
				<span class="rush">Срочно</span>
				<a href="#">Улечу в космос</a>
			</h3>
			<p>
				<span>Ровеньки /</span>
				<span>Прочее</span>
			</p>
			<p>
				<span>24 сентября 2018г.</span>
				<span class="ads-price">Договорная</span>
			</p>
			<i class="icon-like-full"></i>
		</div>
	</div>

	<div class="ads__block">
		<a  href="#" class="ads__block-img">
		</a>
		<div class="ads__block-text">
			<h3>
				<a href="#">Продам Беху, заебала...</a>
			</h3>
			<p>
				<span>Ровеньки /</span>
				<span>Транспорт</span>
			</p>
			<p>
				<span>24 сентября 2018г.</span>
				<span class="ads-price">1.13 руб.</span>
			</p>
			<i class="icon-like-empty"></i>
		</div>
	</div>

	<?php 

		for ($i=0; $i < 20; $i++) { 
			echo '
			<div class="ads__block">
				<a  href="#" class="ads__block-img">
					<img src="img/minislide2.jpg" alt="img">
					<img src="img/minislide3.jpg" alt="img">
				</a>
				<div class="ads__block-text">
					<h3>
						<a href="#">Продам Беху, заебала...'.$i.'</a>
					</h3>
					<p>
						<span>Ровеньки /</span>
						<span>Транспорт</span>
					</p>
					<p>
						<span>24 сентября 2018г.</span>
						<span class="ads-price">1.13 руб.</span>
					</p>
					<i class="icon-like-empty"></i>
				</div>
			</div>
			';
		}

	 ?>

</div>
<!-- /.ads block-->

<?= $this->registerJsFile('@web/js/ads.js', $options = ['depends' => 'frontend\assets\MainAssets'])?>