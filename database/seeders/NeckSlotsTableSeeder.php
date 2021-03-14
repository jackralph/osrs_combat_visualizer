<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NeckSlot;

class NeckSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $neck_slots = json_decode(file_get_contents('database/json/equipment/neck_slots.json'));

        foreach($neck_slots as $neck_slot) {
            NeckSlot::create(array(
                'item_id' => $neck_slot->id,
                'name' => $neck_slot->name,
                'last_updated' => $neck_slot->last_updated,
                'incomplete' => $neck_slot->incomplete,
                'members' => $neck_slot->members,
                'tradeable' => $neck_slot->tradeable,
                'tradeable_on_ge' => $neck_slot->tradeable_on_ge,
                'stackable' => $neck_slot->stackable,
                'stacked' => $neck_slot->stacked,
                'noted' => $neck_slot->noted,
                'noteable' => $neck_slot->noteable,
                'linked_id_item' => $neck_slot->linked_id_item,
                'linked_id_noted' => $neck_slot->linked_id_noted,
                'linked_id_placeholder' => $neck_slot->linked_id_placeholder,
                'placeholder' => $neck_slot->placeholder,
                'equipable' => $neck_slot->equipable,
                'equipable_by_player' => $neck_slot->equipable_by_player,
                'equipable_weapon' => $neck_slot->equipable_weapon,
                'cost' => $neck_slot->cost,
                'lowalch' => $neck_slot->lowalch,
                'highalch' => $neck_slot->highalch,
                'weight' => $neck_slot->weight,
                'buy_limit' => $neck_slot->buy_limit,
                'quest_item' => $neck_slot->quest_item,
                'release_date' => $neck_slot->release_date,
                'duplicate' => $neck_slot->duplicate,
                'examine' => $neck_slot->examine,
                'icon' => $neck_slot->icon,
                'wiki_name' => $neck_slot->wiki_name,
                'wiki_url' => $neck_slot->wiki_url,
                'equipment' => json_encode($neck_slot->equipment),
                'weapon' => json_encode($neck_slot->weapon)
            ));
        }
    }
}
