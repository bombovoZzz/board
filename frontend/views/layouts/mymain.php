	<?php
    use frontend\assets\MyAsset;

    MyAsset::register($this);
?>

<?php $this->beginPage()?>
<!doctype html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <?php $this->head()?>
</head>
<?php $this->beginBody() ?>
<body>

<!-- header -->
<header class="header" id="header-js">
	<div class="header-wrap">
		<a href="#">
			<div class="header__logo">
				<h2>dealland.ru</h2>
				<p>Место реальных сделок</p>
			</div>
		</a>
		<div class="header__search">
			<form>
				<input type="text" placeholder="Поиск обьявлений ...">
			</form>
			<img src="img/icon/search-icon.png" alt="search">
		</div>
		<div class="header__btn">
			<div class="header__btn-add">
				<img src="img/icon/add-icon.png" alt="add">
				<p>Подать обьявление</p>
			</div>
			<div class="header__btn-user">
				<img src="img/icon/user-icon.png" alt="user">
				<p>Вход</p>
			</div>
		</div>
	</div>
</header>




</body>
<?php $this->endBody()?>
</html>
<?php $this->endPage()?>
