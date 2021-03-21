<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CapeSlot;

class CapeSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cape_slots = json_decode(file_get_contents('database/json/equipment/cape_slots.json'));

        foreach($cape_slots as $cape_slot) {
            if (!$cape_slot->duplicate) {
                CapeSlot::create(array(
                    'item_id' => $cape_slot->id,
                    'name' => $cape_slot->name,
                    'last_updated' => $cape_slot->last_updated,
                    'icon' => $cape_slot->icon,
                    'wiki_name' => $cape_slot->wiki_name,
                    'wiki_url' => $cape_slot->wiki_url,
                    'equipment' => json_encode($cape_slot->equipment),
                ));
            }
        }
    }
}
