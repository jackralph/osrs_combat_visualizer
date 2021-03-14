<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CapeSlot;

class CapeSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cape_slots = json_decode(file_get_contents('database/json/equipment/cape_slots.json'));

        foreach($cape_slots as $cape_slot) {
            CapeSlot::create(array(
                'item_id' => $cape_slot->id,
                'name' => $cape_slot->name,
                'last_updated' => $cape_slot->last_updated,
                'incomplete' => $cape_slot->incomplete,
                'members' => $cape_slot->members,
                'tradeable' => $cape_slot->tradeable,
                'tradeable_on_ge' => $cape_slot->tradeable_on_ge,
                'stackable' => $cape_slot->stackable,
                'stacked' => $cape_slot->stacked,
                'noted' => $cape_slot->noted,
                'noteable' => $cape_slot->noteable,
                'linked_id_item' => $cape_slot->linked_id_item,
                'linked_id_noted' => $cape_slot->linked_id_noted,
                'linked_id_placeholder' => $cape_slot->linked_id_placeholder,
                'placeholder' => $cape_slot->placeholder,
                'equipable' => $cape_slot->equipable,
                'equipable_by_player' => $cape_slot->equipable_by_player,
                'equipable_weapon' => $cape_slot->equipable_weapon,
                'cost' => $cape_slot->cost,
                'lowalch' => $cape_slot->lowalch,
                'highalch' => $cape_slot->highalch,
                'weight' => $cape_slot->weight,
                'buy_limit' => $cape_slot->buy_limit,
                'quest_item' => $cape_slot->quest_item,
                'release_date' => $cape_slot->release_date,
                'duplicate' => $cape_slot->duplicate,
                'examine' => $cape_slot->examine,
                'icon' => $cape_slot->icon,
                'wiki_name' => $cape_slot->wiki_name,
                'wiki_url' => $cape_slot->wiki_url,
                'equipment' => json_encode($cape_slot->equipment),
                'weapon' => json_encode($cape_slot->weapon)
            ));
        }
    }
}
