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

    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
    	'css/reset.css',
        'css/header.css'
    ];

}