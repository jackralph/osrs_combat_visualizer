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
            if (!$ammo_slot->duplicate) {
                AmmoSlot::create(array(
                    'item_id' => $ammo_slot->id,
                    'name' => $ammo_slot->name,
                    'last_updated' => $ammo_slot->last_updated,
                    'icon' => $ammo_slot->icon,
                    'wiki_name' => $ammo_slot->wiki_name,
                    'wiki_url' => $ammo_slot->wiki_url,
                    'equipment' => json_encode($ammo_slot->equipment),
                ));
            }
        }
    }
}
