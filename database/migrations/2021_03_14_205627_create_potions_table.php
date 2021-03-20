<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePotionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('potions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('item_id');
            $table->string('name');
            $table->string('last_updated');
            $table->boolean('equipable');
            $table->boolean('equipable_by_player');
            $table->boolean('equipable_weapon');
            $table->boolean("duplicate");
            $table->text("icon");
            $table->string("wiki_name")->nullable();
            $table->string("wiki_url")->nullable();
            $table->text("bonuses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('potions');
    }
}
