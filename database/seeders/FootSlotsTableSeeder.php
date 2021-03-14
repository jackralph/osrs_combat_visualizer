<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FootSlot;

class FootSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $foot_slots = json_decode(file_get_contents('database/json/equipment/foot_slots.json'));

        foreach($foot_slots as $foot_slot) {
            FootSlot::create(array(
                'item_id' => $foot_slot->id,
                'name' => $foot_slot->name,
                'last_updated' => $foot_slot->last_updated,
                'incomplete' => $foot_slot->incomplete,
                'members' => $foot_slot->members,
                'tradeable' => $foot_slot->tradeable,
                'tradeable_on_ge' => $foot_slot->tradeable_on_ge,
                'stackable' => $foot_slot->stackable,
                'stacked' => $foot_slot->stacked,
                'noted' => $foot_slot->noted,
                'noteable' => $foot_slot->noteable,
                'linked_id_item' => $foot_slot->linked_id_item,
                'linked_id_noted' => $foot_slot->linked_id_noted,
                'linked_id_placeholder' => $foot_slot->linked_id_placeholder,
                'placeholder' => $foot_slot->placeholder,
                'equipable' => $foot_slot->equipable,
                'equipable_by_player' => $foot_slot->equipable_by_player,
                'equipable_weapon' => $foot_slot->equipable_weapon,
                'cost' => $foot_slot->cost,
                'lowalch' => $foot_slot->lowalch,
                'highalch' => $foot_slot->highalch,
                'weight' => $foot_slot->weight,
                'buy_limit' => $foot_slot->buy_limit,
                'quest_item' => $foot_slot->quest_item,
                'release_date' => $foot_slot->release_date,
                'duplicate' => $foot_slot->duplicate,
                'examine' => $foot_slot->examine,
                'icon' => $foot_slot->icon,
                'wiki_name' => $foot_slot->wiki_name,
                'wiki_url' => $foot_slot->wiki_url,
                'equipment' => json_encode($foot_slot->equipment),
                'weapon' => json_encode($foot_slot->weapon)
            ));
        }
    }
}
