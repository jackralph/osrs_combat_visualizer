<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\WeaponSlot;

class WeaponSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $weapon_slots = json_decode(file_get_contents('database/json/equipment/weapon_slots.json'));

        $weapon_slots_2h = json_decode(file_get_contents('database/json/equipment/weapon_slots_2h.json'));

        foreach($weapon_slots as $weapon_slot) {
            WeaponSlot::create(array(
                'item_id' => $weapon_slot->id,
                'name' => $weapon_slot->name,
                'last_updated' => $weapon_slot->last_updated,
                'incomplete' => $weapon_slot->incomplete,
                'members' => $weapon_slot->members,
                'tradeable' => $weapon_slot->tradeable,
                'tradeable_on_ge' => $weapon_slot->tradeable_on_ge,
                'stackable' => $weapon_slot->stackable,
                'stacked' => $weapon_slot->stacked,
                'noted' => $weapon_slot->noted,
                'noteable' => $weapon_slot->noteable,
                'linked_id_item' => $weapon_slot->linked_id_item,
                'linked_id_noted' => $weapon_slot->linked_id_noted,
                'linked_id_placeholder' => $weapon_slot->linked_id_placeholder,
                'placeholder' => $weapon_slot->placeholder,
                'equipable' => $weapon_slot->equipable,
                'equipable_by_player' => $weapon_slot->equipable_by_player,
                'equipable_weapon' => $weapon_slot->equipable_weapon,
                'cost' => $weapon_slot->cost,
                'lowalch' => $weapon_slot->lowalch,
                'highalch' => $weapon_slot->highalch,
                'weight' => $weapon_slot->weight,
                'buy_limit' => $weapon_slot->buy_limit,
                'quest_item' => $weapon_slot->quest_item,
                'release_date' => $weapon_slot->release_date,
                'duplicate' => $weapon_slot->duplicate,
                'examine' => $weapon_slot->examine,
                'icon' => $weapon_slot->icon,
                'wiki_name' => $weapon_slot->wiki_name,
                'wiki_url' => $weapon_slot->wiki_url,
                'equipment' => json_encode($weapon_slot->equipment),
                'weapon' => json_encode($weapon_slot->weapon),
                'two_handed' => false
            ));
        }

        foreach($weapon_slots_2h as $weapon_slot_2h) {
            WeaponSlot::create(array(
                'item_id' => $weapon_slot_2h->id,
                'name' => $weapon_slot_2h->name,
                'last_updated' => $weapon_slot_2h->last_updated,
                'incomplete' => $weapon_slot_2h->incomplete,
                'members' => $weapon_slot_2h->members,
                'tradeable' => $weapon_slot_2h->tradeable,
                'tradeable_on_ge' => $weapon_slot_2h->tradeable_on_ge,
                'stackable' => $weapon_slot_2h->stackable,
                'stacked' => $weapon_slot_2h->stacked,
                'noted' => $weapon_slot_2h->noted,
                'noteable' => $weapon_slot_2h->noteable,
                'linked_id_item' => $weapon_slot_2h->linked_id_item,
                'linked_id_noted' => $weapon_slot_2h->linked_id_noted,
                'linked_id_placeholder' => $weapon_slot_2h->linked_id_placeholder,
                'placeholder' => $weapon_slot_2h->placeholder,
                'equipable' => $weapon_slot_2h->equipable,
                'equipable_by_player' => $weapon_slot_2h->equipable_by_player,
                'equipable_weapon' => $weapon_slot_2h->equipable_weapon,
                'cost' => $weapon_slot_2h->cost,
                'lowalch' => $weapon_slot_2h->lowalch,
                'highalch' => $weapon_slot_2h->highalch,
                'weight' => $weapon_slot_2h->weight,
                'buy_limit' => $weapon_slot_2h->buy_limit,
                'quest_item' => $weapon_slot_2h->quest_item,
                'release_date' => $weapon_slot_2h->release_date,
                'duplicate' => $weapon_slot_2h->duplicate,
                'examine' => $weapon_slot_2h->examine,
                'icon' => $weapon_slot_2h->icon,
                'wiki_name' => $weapon_slot_2h->wiki_name,
                'wiki_url' => $weapon_slot_2h->wiki_url,
                'equipment' => json_encode($weapon_slot_2h->equipment),
                'weapon' => json_encode($weapon_slot_2h->weapon),
                'two_handed' => true
            ));
        }
    }
}
