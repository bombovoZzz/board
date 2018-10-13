<?php
/**
 * Created by PhpStorm.
 * User: mixey
 * Date: 30.09.2018
 * Time: 15:14
 */

namespace frontend\assets;
use yii\web\AssetBundle;

class MainAssets extends AssetBundle {

    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        'css/fonts.css',
    	'css/libs.css',
        'css/main.css'
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