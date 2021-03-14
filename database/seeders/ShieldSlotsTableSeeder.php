<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ShieldSlot;

class ShieldSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shield_slots = json_decode(file_get_contents('database/json/equipment/shield_slots.json'));

        foreach($shield_slots as $shield_slot) {
            ShieldSlot::create(array(
                'item_id' => $shield_slot->id,
                'name' => $shield_slot->name,
                'last_updated' => $shield_slot->last_updated,
                'incomplete' => $shield_slot->incomplete,
                'members' => $shield_slot->members,
                'tradeable' => $shield_slot->tradeable,
                'tradeable_on_ge' => $shield_slot->tradeable_on_ge,
                'stackable' => $shield_slot->stackable,
                'stacked' => $shield_slot->stacked,
                'noted' => $shield_slot->noted,
                'noteable' => $shield_slot->noteable,
                'linked_id_item' => $shield_slot->linked_id_item,
                'linked_id_noted' => $shield_slot->linked_id_noted,
                'linked_id_placeholder' => $shield_slot->linked_id_placeholder,
                'placeholder' => $shield_slot->placeholder,
                'equipable' => $shield_slot->equipable,
                'equipable_by_player' => $shield_slot->equipable_by_player,
                'equipable_weapon' => $shield_slot->equipable_weapon,
                'cost' => $shield_slot->cost,
                'lowalch' => $shield_slot->lowalch,
                'highalch' => $shield_slot->highalch,
                'weight' => $shield_slot->weight,
                'buy_limit' => $shield_slot->buy_limit,
                'quest_item' => $shield_slot->quest_item,
                'release_date' => $shield_slot->release_date,
                'duplicate' => $shield_slot->duplicate,
                'examine' => $shield_slot->examine,
                'icon' => $shield_slot->icon,
                'wiki_name' => $shield_slot->wiki_name,
                'wiki_url' => $shield_slot->wiki_url,
                'equipment' => json_encode($shield_slot->equipment),
                'weapon' => json_encode($shield_slot->weapon)
            ));
        }
    }
}
