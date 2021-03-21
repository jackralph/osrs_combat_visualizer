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
            if (!$weapon_slot->duplicate) {
                WeaponSlot::create(array(
                    'item_id' => $weapon_slot->id,
                    'name' => $weapon_slot->name,
                    'last_updated' => $weapon_slot->last_updated,
                    'icon' => $weapon_slot->icon,
                    'wiki_name' => $weapon_slot->wiki_name,
                    'wiki_url' => $weapon_slot->wiki_url,
                    'equipment' => json_encode($weapon_slot->equipment),
                    'weapon' => json_encode($weapon_slot->weapon),
                    'two_handed' => false
                ));
            }
        }

        foreach($weapon_slots_2h as $weapon_slot_2h) {
            if (!$weapon_slot_2h->duplicate) {
                WeaponSlot::create(array(
                    'item_id' => $weapon_slot_2h->id,
                    'name' => $weapon_slot_2h->name,
                    'last_updated' => $weapon_slot_2h->last_updated,
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
}
