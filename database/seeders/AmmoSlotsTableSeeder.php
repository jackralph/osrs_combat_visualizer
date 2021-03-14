<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AmmoSlot;

class AmmoSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ammo_slots = json_decode(file_get_contents('database/json/equipment/ammo_slots.json'));

        foreach($ammo_slots as $ammo_slot) {
            AmmoSlot::create(array(
                'item_id' => $ammo_slot->id,
                'name' => $ammo_slot->name,
                'last_updated' => $ammo_slot->last_updated,
                'incomplete' => $ammo_slot->incomplete,
                'members' => $ammo_slot->members,
                'tradeable' => $ammo_slot->tradeable,
                'tradeable_on_ge' => $ammo_slot->tradeable_on_ge,
                'stackable' => $ammo_slot->stackable,
                'stacked' => $ammo_slot->stacked,
                'noted' => $ammo_slot->noted,
                'noteable' => $ammo_slot->noteable,
                'linked_id_item' => $ammo_slot->linked_id_item,
                'linked_id_noted' => $ammo_slot->linked_id_noted,
                'linked_id_placeholder' => $ammo_slot->linked_id_placeholder,
                'placeholder' => $ammo_slot->placeholder,
                'equipable' => $ammo_slot->equipable,
                'equipable_by_player' => $ammo_slot->equipable_by_player,
                'equipable_weapon' => $ammo_slot->equipable_weapon,
                'cost' => $ammo_slot->cost,
                'lowalch' => $ammo_slot->lowalch,
                'highalch' => $ammo_slot->highalch,
                'weight' => $ammo_slot->weight,
                'buy_limit' => $ammo_slot->buy_limit,
                'quest_item' => $ammo_slot->quest_item,
                'release_date' => $ammo_slot->release_date,
                'duplicate' => $ammo_slot->duplicate,
                'examine' => $ammo_slot->examine,
                'icon' => $ammo_slot->icon,
                'wiki_name' => $ammo_slot->wiki_name,
                'wiki_url' => $ammo_slot->wiki_url,
                'equipment' => json_encode($ammo_slot->equipment),
                'weapon' => json_encode($ammo_slot->weapon)
            ));
        }
    }
}