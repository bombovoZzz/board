<?php

use yii\db\Migration;

/**
 * Handles the creation of table `cities`.
 */
class m181015_144155_create_cities_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';

        $this->createTable('cities', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull(),
            'title_name' => $this->string(50)->notNull(),
        ], $tableOptions);

        $this->batchInsert('cities', ['name', 'title_name'], [
            ['ЛНР', 'ЛНР'],
            ['Луганск', 'Луганске'],
            ['Алчевск', 'Алчевске'],
            ['Антрацит', 'Антраците'],
            ['Брянка', 'Брянке'],
            ['Кировск', 'Кировске'],
            ['Краснодон', 'Краснодоне'],
            ['Красный луч', 'Красном луче'],
            ['Красный партизан', 'Красном партизане'],
            ['Первомайск', 'Первомайске'],
            ['Ровеньки', 'Ровеньках'],
            ['Свердловск', 'Свердловске'],
            ['Лутугино', 'Лутугино']
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('cities');
    }
}
