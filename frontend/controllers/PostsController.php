<?php
/**
 * Created by PhpStorm.
 * User: mixey
 * Date: 30.09.2018
 * Time: 14:53
 */

namespace frontend\controllers;
use yii\web\Controller;

class PostsController extends Controller {

    public function actionIndex () {
        return $this->render('index');
    }


}