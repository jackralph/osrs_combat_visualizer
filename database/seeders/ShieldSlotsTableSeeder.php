<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ShieldSlot;

class ShieldSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shield_slots = json_decode(file_get_contents('database/json/equipment/shield_slots.json'));

        foreach($shield_slots as $shield_slot) {
            if (!$shield_slot->duplicate) {
                ShieldSlot::create(array(
                    'item_id' => $shield_slot->id,
                    'name' => $shield_slot->name,
                    'last_updated' => $shield_slot->last_updated,
                    'icon' => $shield_slot->icon,
                    'wiki_name' => $shield_slot->wiki_name,
                    'wiki_url' => $shield_slot->wiki_url,
                    'equipment' => json_encode($shield_slot->equipment),
                ));
            }
        }
    }
}
