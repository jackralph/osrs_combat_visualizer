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
            LegSlot::create(array(
                'item_id' => $leg_slot->id,
                'name' => $leg_slot->name,
                'last_updated' => $leg_slot->last_updated,
                'equipable' => $leg_slot->equipable,
                'equipable_by_player' => $leg_slot->equipable_by_player,
                'equipable_weapon' => $leg_slot->equipable_weapon,
                'duplicate' => $leg_slot->duplicate,
                'icon' => $leg_slot->icon,
                'wiki_name' => $leg_slot->wiki_name,
                'wiki_url' => $leg_slot->wiki_url,
                'equipment' => json_encode($leg_slot->equipment),
                'weapon' => json_encode($leg_slot->weapon)
            ));
        }
    }
}
