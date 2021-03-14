<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HandSlot;

class HandSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hand_slots = json_decode(file_get_contents('database/json/equipment/hand_slots.json'));

        foreach($hand_slots as $hand_slot) {
            HandSlot::create(array(
                'item_id' => $hand_slot->id,
                'name' => $hand_slot->name,
                'last_updated' => $hand_slot->last_updated,
                'incomplete' => $hand_slot->incomplete,
                'members' => $hand_slot->members,
                'tradeable' => $hand_slot->tradeable,
                'tradeable_on_ge' => $hand_slot->tradeable_on_ge,
                'stackable' => $hand_slot->stackable,
                'stacked' => $hand_slot->stacked,
                'noted' => $hand_slot->noted,
                'noteable' => $hand_slot->noteable,
                'linked_id_item' => $hand_slot->linked_id_item,
                'linked_id_noted' => $hand_slot->linked_id_noted,
                'linked_id_placeholder' => $hand_slot->linked_id_placeholder,
                'placeholder' => $hand_slot->placeholder,
                'equipable' => $hand_slot->equipable,
                'equipable_by_player' => $hand_slot->equipable_by_player,
                'equipable_weapon' => $hand_slot->equipable_weapon,
                'cost' => $hand_slot->cost,
                'lowalch' => $hand_slot->lowalch,
                'highalch' => $hand_slot->highalch,
                'weight' => $hand_slot->weight,
                'buy_limit' => $hand_slot->buy_limit,
                'quest_item' => $hand_slot->quest_item,
                'release_date' => $hand_slot->release_date,
                'duplicate' => $hand_slot->duplicate,
                'examine' => $hand_slot->examine,
                'icon' => $hand_slot->icon,
                'wiki_name' => $hand_slot->wiki_name,
                'wiki_url' => $hand_slot->wiki_url,
                'equipment' => json_encode($hand_slot->equipment),
                'weapon' => json_encode($hand_slot->weapon)
            ));
        }
    }
}
