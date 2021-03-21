<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FootSlot;

class FootSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $foot_slots = json_decode(file_get_contents('database/json/equipment/foot_slots.json'));

        foreach($foot_slots as $foot_slot) {
            if (!$foot_slot->duplicate) {
                FootSlot::create(array(
                    'item_id' => $foot_slot->id,
                    'name' => $foot_slot->name,
                    'last_updated' => $foot_slot->last_updated,
                    'equipable' => $foot_slot->equipable,
                    'equipable_by_player' => $foot_slot->equipable_by_player,
                    'equipable_weapon' => $foot_slot->equipable_weapon,
                    'duplicate' => $foot_slot->duplicate,
                    'icon' => $foot_slot->icon,
                    'wiki_name' => $foot_slot->wiki_name,
                    'wiki_url' => $foot_slot->wiki_url,
                    'equipment' => json_encode($foot_slot->equipment),
                    'weapon' => json_encode($foot_slot->weapon)
                )); 
            }
        }
    }
}
