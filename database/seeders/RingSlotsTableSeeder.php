<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RingSlot;

class RingSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ring_slots = json_decode(file_get_contents('database/json/equipment/ring_slots.json'));

        foreach($ring_slots as $ring_slot) {
            if (!$ring_slot->duplicate) {
                RingSlot::create(array(
                    'item_id' => $ring_slot->id,
                    'name' => $ring_slot->name,
                    'last_updated' => $ring_slot->last_updated,
                    'equipable' => $ring_slot->equipable,
                    'equipable_by_player' => $ring_slot->equipable_by_player,
                    'equipable_weapon' => $ring_slot->equipable_weapon,
                    'duplicate' => $ring_slot->duplicate,
                    'icon' => $ring_slot->icon,
                    'wiki_name' => $ring_slot->wiki_name,
                    'wiki_url' => $ring_slot->wiki_url,
                    'equipment' => json_encode($ring_slot->equipment),
                    'weapon' => json_encode($ring_slot->weapon)
                ));
            }
        }
    }
}
