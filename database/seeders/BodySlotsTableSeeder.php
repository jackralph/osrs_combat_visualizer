<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BodySlot;

class BodySlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $body_slots = json_decode(file_get_contents('database/json/equipment/body_slots.json'));

        foreach($body_slots as $body_slot) {
            BodySlot::create(array(
                'item_id' => $body_slot->id,
                'name' => $body_slot->name,
                'last_updated' => $body_slot->last_updated,
                'incomplete' => $body_slot->incomplete,
                'members' => $body_slot->members,
                'tradeable' => $body_slot->tradeable,
                'tradeable_on_ge' => $body_slot->tradeable_on_ge,
                'stackable' => $body_slot->stackable,
                'stacked' => $body_slot->stacked,
                'noted' => $body_slot->noted,
                'noteable' => $body_slot->noteable,
                'linked_id_item' => $body_slot->linked_id_item,
                'linked_id_noted' => $body_slot->linked_id_noted,
                'linked_id_placeholder' => $body_slot->linked_id_placeholder,
                'placeholder' => $body_slot->placeholder,
                'equipable' => $body_slot->equipable,
                'equipable_by_player' => $body_slot->equipable_by_player,
                'equipable_weapon' => $body_slot->equipable_weapon,
                'cost' => $body_slot->cost,
                'lowalch' => $body_slot->lowalch,
                'highalch' => $body_slot->highalch,
                'weight' => $body_slot->weight,
                'buy_limit' => $body_slot->buy_limit,
                'quest_item' => $body_slot->quest_item,
                'release_date' => $body_slot->release_date,
                'duplicate' => $body_slot->duplicate,
                'examine' => $body_slot->examine,
                'icon' => $body_slot->icon,
                'wiki_name' => $body_slot->wiki_name,
                'wiki_url' => $body_slot->wiki_url,
                'equipment' => json_encode($body_slot->equipment),
                'weapon' => json_encode($body_slot->weapon)
            ));
        }
    }
}
