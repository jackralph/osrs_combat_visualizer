<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cape;

class CapesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $capes = json_decode(file_get_contents('database/json/equipment/capes.json'));

        foreach($capes as $cape) {
            Cape::create(array(
                'item_id' => $cape->id,
                'name' => $cape->name,
                'last_updated' => $cape->last_updated,
                'incomplete' => $cape->incomplete,
                'members' => $cape->members,
                'tradeable' => $cape->tradeable,
                'tradeable_on_ge' => $cape->tradeable_on_ge,
                'stackable' => $cape->stackable,
                'stacked' => $cape->stacked,
                'noted' => $cape->noted,
                'noteable' => $cape->noteable,
                'linked_id_item' => $cape->linked_id_item,
                'linked_id_noted' => $cape->linked_id_noted,
                'linked_id_placeholder' => $cape->linked_id_placeholder,
                'placeholder' => $cape->placeholder,
                'equipable' => $cape->equipable,
                'equipable_by_player' => $cape->equipable_by_player,
                'equipable_weapon' => $cape->equipable_weapon,
                'cost' => $cape->cost,
                'lowalch' => $cape->lowalch,
                'highalch' => $cape->highalch,
                'weight' => $cape->weight,
                'buy_limit' => $cape->buy_limit,
                'quest_item' => $cape->quest_item,
                'release_date' => $cape->release_date,
                'duplicate' => $cape->duplicate,
                'examine' => $cape->examine,
                'icon' => $cape->icon,
                'wiki_name' => $cape->wiki_name,
                'wiki_url' => $cape->wiki_url,
                'equipment' => json_encode($cape->equipment),
                'weapon' => json_encode($cape->weapon)
            ));
        }
    }
}
