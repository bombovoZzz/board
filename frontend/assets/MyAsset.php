<?php
/**
 * Created by PhpStorm.
 * User: mixey
 * Date: 30.09.2018
 * Time: 15:14
 */

namespace frontend\assets;
use yii\web\AssetBundle;

class MyAsset extends AssetBundle {

    public $css = [
    	'css/libs.css',
        'css/header.css'
    ];

    // public $js = [
    // 	''
    // ];
    public $depends = [
    	'yii\web\JqueryAsset'
        // 'yii\web\YiiAsset',
        // 'yii\bootstrap\BootstrapAsset',

    ];

}