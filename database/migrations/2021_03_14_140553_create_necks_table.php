<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNecksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('necks', function (Blueprint $table) {
            $table->integer('id')->unique();
            $table->string('name');
            $table->string('last_updated');
            $table->boolean('incomplete');
            $table->boolean('members');
            $table->boolean('tradeable');
            $table->boolean('tradeable_on_ge');
            $table->boolean('stackable');
            $table->boolean('stacked')->nullable();
            $table->boolean('noted');
            $table->boolean('noteable');
            $table->boolean('linked_id_item')->nullable();
            $table->boolean('linked_id_noted')->nullable();
            $table->integer('linked_id_placeholder')->nullable();
            $table->boolean('placeholder');
            $table->boolean('equipable');
            $table->boolean('equipable_by_player');
            $table->boolean('equipable_weapon');
            $table->integer('cost');
            $table->integer('lowalch')->nullable();
            $table->integer('highalch')->nullable();
            $table->float('weight')->nullable();
            $table->integer('buy_limit')->nullable();
            $table->boolean('quest_item');
            $table->string("release_date")->nullable();
            $table->boolean("duplicate");
            $table->string("examine")->nullable();
            $table->string("icon");
            $table->string("wiki_name")->nullable();
            $table->string("wiki_url")->nullable();
            $table->text("equipment")->nullable();
            $table->text("weapon")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('necks');
    }
}
