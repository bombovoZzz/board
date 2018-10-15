<?php
Yii::setAlias('@common', dirname(__DIR__));
Yii::setAlias('@frontend', dirname(dirname(__DIR__)) . '/frontend');
Yii::setAlias('@backend', dirname(dirname(__DIR__)) . '/backend');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/console');



function showMe ($el, $extend) {
    echo '<pre>';
    if ($extend === 1) {
        var_dump($el);
    }
    else {
        if (is_array($el) || is_object($el)) {
            print_r($el);
        }
        else {
            echo $el;
        }
    }
    echo '</pre>';
    die;
}