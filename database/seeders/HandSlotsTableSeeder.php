<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HandSlot;

class HandSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hand_slots = json_decode(file_get_contents('database/json/equipment/hand_slots.json'));

        foreach($hand_slots as $hand_slot) {
            if (!$hand_slot->duplicate) {
                HandSlot::create(array(
                    'item_id' => $hand_slot->id,
                    'name' => $hand_slot->name,
                    'last_updated' => $hand_slot->last_updated,
                    'icon' => $hand_slot->icon,
                    'wiki_name' => $hand_slot->wiki_name,
                    'wiki_url' => $hand_slot->wiki_url,
                    'equipment' => json_encode($hand_slot->equipment),
                ));
            }
        }
    }
}
