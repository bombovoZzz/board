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




</body>
<?php $this->endBody()?>
</html>
<?php $this->endPage()?>
