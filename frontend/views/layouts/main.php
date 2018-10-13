	<?php
    use frontend\assets\MainAssets;

    MainAssets::register($this);
?>

<?php $this->beginPage()?>
<!doctype html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>dealland</title>
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
			<i class="icon-search"></i>
		</div>
		<div class="header__btn">
			<div class="header__btn-add">
				<i class="icon-add"></i>
				<p>Подать обьявление</p>
			</div>
			<div class="header__btn-user">
				<i class="icon-user"></i>
				<p id="user-input">Вход</p>
				<p id="user-profile">Профиль</p>
				<i class="icon-arow-down"></i>
			</div>
		</div>
	</div>
</header>

<!-- crumbs -->
<div class="crumbs" id="crumbs-js">
	<a href="#">Главная</a>
	<a href="#">/ Город</a>
	<a href="#">/ Категория</a>
	<a href="#">/ Название объявления</a>
</div>

<?= $content?>




</body>
<?php $this->endBody()?>
</html>
<?php $this->endPage()?>
