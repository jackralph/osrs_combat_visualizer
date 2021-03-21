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
            if (!$leg_slot->duplicate) {
                LegSlot::create(array(
                    'item_id' => $leg_slot->id,
                    'name' => $leg_slot->name,
                    'last_updated' => $leg_slot->last_updated,
                    'icon' => $leg_slot->icon,
                    'wiki_name' => $leg_slot->wiki_name,
                    'wiki_url' => $leg_slot->wiki_url,
                    'equipment' => json_encode($leg_slot->equipment),
                ));
            }
        }
    }
}
