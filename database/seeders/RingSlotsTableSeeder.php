<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RingSlot;

class RingSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ring_slots = json_decode(file_get_contents('database/json/equipment/ring_slots.json'));

        foreach($ring_slots as $ring_slot) {
            RingSlot::create(array(
                'item_id' => $ring_slot->id,
                'name' => $ring_slot->name,
                'last_updated' => $ring_slot->last_updated,
                'incomplete' => $ring_slot->incomplete,
                'members' => $ring_slot->members,
                'tradeable' => $ring_slot->tradeable,
                'tradeable_on_ge' => $ring_slot->tradeable_on_ge,
                'stackable' => $ring_slot->stackable,
                'stacked' => $ring_slot->stacked,
                'noted' => $ring_slot->noted,
                'noteable' => $ring_slot->noteable,
                'linked_id_item' => $ring_slot->linked_id_item,
                'linked_id_noted' => $ring_slot->linked_id_noted,
                'linked_id_placeholder' => $ring_slot->linked_id_placeholder,
                'placeholder' => $ring_slot->placeholder,
                'equipable' => $ring_slot->equipable,
                'equipable_by_player' => $ring_slot->equipable_by_player,
                'equipable_weapon' => $ring_slot->equipable_weapon,
                'cost' => $ring_slot->cost,
                'lowalch' => $ring_slot->lowalch,
                'highalch' => $ring_slot->highalch,
                'weight' => $ring_slot->weight,
                'buy_limit' => $ring_slot->buy_limit,
                'quest_item' => $ring_slot->quest_item,
                'release_date' => $ring_slot->release_date,
                'duplicate' => $ring_slot->duplicate,
                'examine' => $ring_slot->examine,
                'icon' => $ring_slot->icon,
                'wiki_name' => $ring_slot->wiki_name,
                'wiki_url' => $ring_slot->wiki_url,
                'equipment' => json_encode($ring_slot->equipment),
                'weapon' => json_encode($ring_slot->weapon)
            ));
        }
    }
}
