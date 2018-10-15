<?php

use yii\db\Migration;

/**
 * Handles the creation of table `categories`.
 */
class m181014_161326_create_categories_table extends Migration {
    /**
     * {@inheritdoc}
     */
    public function safeUp() {

        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';

        $this->createTable('categories', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull(),
            'title_name' => $this->string(50)->notNull(),
            'parent_id' => $this->tinyInteger(2)->notNull()
        ], $tableOptions);

        $this->batchInsert('categories', ['name', 'title_name', 'parent_id'], [
            ['Мода и стиль', 'одежды, обуви и аксессуаров', 0],
            ['Детский мир', 'товаров для детей и мам', 0],
            ['Услуги', 'Предоставление услуг', 0],
            ['Электроника', 'электроники', 0],
            ['Все для дома', 'товаров для дома', 0],
            ['Ремонт и стройка', 'товаров для ремонта и стройки', 0],
            ['Сад и огород', 'товаров для сада и огорода', 0],
            ['Спорт, туризм, хобби', 'товаров для спорта, туризма и хобби', 0],
            ['Праздники', 'товаров для праздников', 0],
            ['Животные', 'животных и товаров для них', 0],
            ['Работа, учеба, бизнес', 'Работа, учеба, бизнес', 0],
            ['Транспорт', 'транспорта', 0],
            ['Недвижимость', 'недвижимости', 0],
            ['Прочее', 'Прочее', 0]
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown() {
        $this->dropTable('categories');
    }
}
