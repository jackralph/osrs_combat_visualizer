<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LegSlot;

class LegSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $leg_slots = json_decode(file_get_contents('database/json/equipment/leg_slots.json'));

        foreach($leg_slots as $leg_slot) {
            LegSlot::create(array(
                'item_id' => $leg_slot->id,
                'name' => $leg_slot->name,
                'last_updated' => $leg_slot->last_updated,
                'incomplete' => $leg_slot->incomplete,
                'members' => $leg_slot->members,
                'tradeable' => $leg_slot->tradeable,
                'tradeable_on_ge' => $leg_slot->tradeable_on_ge,
                'stackable' => $leg_slot->stackable,
                'stacked' => $leg_slot->stacked,
                'noted' => $leg_slot->noted,
                'noteable' => $leg_slot->noteable,
                'linked_id_item' => $leg_slot->linked_id_item,
                'linked_id_noted' => $leg_slot->linked_id_noted,
                'linked_id_placeholder' => $leg_slot->linked_id_placeholder,
                'placeholder' => $leg_slot->placeholder,
                'equipable' => $leg_slot->equipable,
                'equipable_by_player' => $leg_slot->equipable_by_player,
                'equipable_weapon' => $leg_slot->equipable_weapon,
                'cost' => $leg_slot->cost,
                'lowalch' => $leg_slot->lowalch,
                'highalch' => $leg_slot->highalch,
                'weight' => $leg_slot->weight,
                'buy_limit' => $leg_slot->buy_limit,
                'quest_item' => $leg_slot->quest_item,
                'release_date' => $leg_slot->release_date,
                'duplicate' => $leg_slot->duplicate,
                'examine' => $leg_slot->examine,
                'icon' => $leg_slot->icon,
                'wiki_name' => $leg_slot->wiki_name,
                'wiki_url' => $leg_slot->wiki_url,
                'equipment' => json_encode($leg_slot->equipment),
                'weapon' => json_encode($leg_slot->weapon)
            ));
        }
    }
}
