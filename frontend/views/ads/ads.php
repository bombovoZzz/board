<div class="advertise" id="advertise-js">
	<div class="advertise__block">
		<a  href="#" class="advertise__block-img">
			<img src="img/test1.jpg" alt="img">
			<img src="img/minislide2.jpg" alt="img">
			<img src="img/minislide1.jpg" alt="img">
		</a>
		<div class="advertise__block-text">
			<div class="advertise-vip-line"></div>
			<div class="advertise-vip">
				<p>vip</p>
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
				<span class="advertise-price">1.13 руб.</span>
			</p>
			<i class="icon-like-empty"></i>
		</div>
	</div>

	<?php 

		for ($i=0; $i < 50; $i++) { 
			echo '
			<div class="advertise__block">
				<a  href="#" class="advertise__block-img">
					<img src="img/minislide2.jpg" alt="img">
					<img src="img/minislide3.jpg" alt="img">
				</a>
				<div class="advertise__block-text">
					<h3>
						<a href="#">Продам Беху, заебала...'.$i.'</a>
					</h3>
					<p>
						<span>Ровеньки /</span>
						<span>Транспорт</span>
					</p>
					<p>
						<span>24 сентября 2018г.</span>
						<span class="advertise-price">1.13 руб.</span>
					</p>
					<i class="icon-like-empty"></i>
				</div>
			</div>
			';
		}

	 ?>

</div>


<?= $this->registerJsFile('@web/js/ads.js', $options = ['depends' => 'frontend\assets\MainAssets'])?>