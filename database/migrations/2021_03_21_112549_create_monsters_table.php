<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonstersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('monster_id');
            $table->integer('combat_level');
            $table->integer('hit_points');
            $table->text('attributes');
            $table->text('category');
            $table->boolean('duplicate');
            $table->text('icon')->nullable();
            $table->string('wiki_name');
            $table->string('wiki_url');
            $table->integer('attack_level');
            $table->integer('strength_level');
            $table->integer('defence_level');
            $table->integer('magic_level');
            $table->integer('range_level');
            $table->integer('attack_stab');
            $table->integer('attack_slash');
            $table->integer('attack_crush');
            $table->integer('attack_magic');
            $table->integer('attack_ranged');
            $table->integer('defence_stab');
            $table->integer('defence_slash');
            $table->integer('defence_crush');
            $table->integer('defence_magic');
            $table->integer('defence_ranged');
            $table->integer('attack_accuracy');
            $table->integer('melee_strength');
            $table->integer('ranged_strength');
            $table->integer('magic_damage');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('monsters');
    }
}
