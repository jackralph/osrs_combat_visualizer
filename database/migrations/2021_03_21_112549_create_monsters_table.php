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
            $table->integer('hitpoints')->nullable();
            $table->text('attributes');
            $table->text('category');
            $table->string('wiki_name');
            $table->string('wiki_url');
            $table->integer('attack_level');
            $table->integer('strength_level');
            $table->integer('defence_level');
            $table->integer('magic_level');
            $table->integer('ranged_level');
            $table->integer('attack_magic');
            $table->integer('attack_ranged');
            $table->integer('defence_stab');
            $table->integer('defence_slash');
            $table->integer('defence_crush');
            $table->integer('defence_magic');
            $table->integer('defence_ranged');
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
