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
                    'icon' => $neck_slot->icon,
                    'wiki_name' => $neck_slot->wiki_name,
                    'wiki_url' => $neck_slot->wiki_url,
                    'equipment' => json_encode($neck_slot->equipment),
                ));
            }
        }
    }
}
