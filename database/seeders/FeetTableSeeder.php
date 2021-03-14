<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Feet;

class FeetTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $feet = json_decode(file_get_contents('database/json/equipment/feet.json'));

        foreach($feet as $feet_item) {
            Feet::create(array(
                'item_id' => $feet_item->id,
                'name' => $feet_item->name,
                'last_updated' => $feet_item->last_updated,
                'incomplete' => $feet_item->incomplete,
                'members' => $feet_item->members,
                'tradeable' => $feet_item->tradeable,
                'tradeable_on_ge' => $feet_item->tradeable_on_ge,
                'stackable' => $feet_item->stackable,
                'stacked' => $feet_item->stacked,
                'noted' => $feet_item->noted,
                'noteable' => $feet_item->noteable,
                'linked_id_item' => $feet_item->linked_id_item,
                'linked_id_noted' => $feet_item->linked_id_noted,
                'linked_id_placeholder' => $feet_item->linked_id_placeholder,
                'placeholder' => $feet_item->placeholder,
                'equipable' => $feet_item->equipable,
                'equipable_by_player' => $feet_item->equipable_by_player,
                'equipable_weapon' => $feet_item->equipable_weapon,
                'cost' => $feet_item->cost,
                'lowalch' => $feet_item->lowalch,
                'highalch' => $feet_item->highalch,
                'weight' => $feet_item->weight,
                'buy_limit' => $feet_item->buy_limit,
                'quest_item' => $feet_item->quest_item,
                'release_date' => $feet_item->release_date,
                'duplicate' => $feet_item->duplicate,
                'examine' => $feet_item->examine,
                'icon' => $feet_item->icon,
                'wiki_name' => $feet_item->wiki_name,
                'wiki_url' => $feet_item->wiki_url,
                'equipment' => json_encode($feet_item->equipment),
                'weapon' => json_encode($feet_item->weapon)
            ));
        }
    }
}
