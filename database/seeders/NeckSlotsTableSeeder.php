<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NeckSlot;

class NeckSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $neck_slots = json_decode(file_get_contents('database/json/equipment/neck_slots.json'));

        foreach($neck_slots as $neck_slot) {
            if (!$neck_slot->duplicate) {
                NeckSlot::create(array(
                    'item_id' => $neck_slot->id,
                    'name' => $neck_slot->name,
                    'last_updated' => $neck_slot->last_updated,
                    'equipable' => $neck_slot->equipable,
                    'equipable_by_player' => $neck_slot->equipable_by_player,
                    'equipable_weapon' => $neck_slot->equipable_weapon,
                    'duplicate' => $neck_slot->duplicate,
                    'icon' => $neck_slot->icon,
                    'wiki_name' => $neck_slot->wiki_name,
                    'wiki_url' => $neck_slot->wiki_url,
                    'equipment' => json_encode($neck_slot->equipment),
                    'weapon' => json_encode($neck_slot->weapon)
                ));
            }
        }
    }
}
