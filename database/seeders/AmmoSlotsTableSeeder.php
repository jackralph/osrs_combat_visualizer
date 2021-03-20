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
                'equipable' => $ammo_slot->equipable,
                'equipable_by_player' => $ammo_slot->equipable_by_player,
                'equipable_weapon' => $ammo_slot->equipable_weapon,
                'duplicate' => $ammo_slot->duplicate,
                'icon' => $ammo_slot->icon,
                'wiki_name' => $ammo_slot->wiki_name,
                'wiki_url' => $ammo_slot->wiki_url,
                'equipment' => json_encode($ammo_slot->equipment),
                'weapon' => json_encode($ammo_slot->weapon)
            ));
        }
    }
}
