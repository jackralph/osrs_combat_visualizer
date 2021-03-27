<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HeadSlot; 

class HeadSlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $head_slots = json_decode(file_get_contents('database/json/equipment/head_slots.json'));

        foreach($head_slots as $head_slot) {
            if (!$head_slot->duplicate) {
                HeadSlot::create(array(
                    'item_id' => $head_slot->id,
                    'name' => $head_slot->name,
                    'last_updated' => $head_slot->last_updated,
                    'icon' => $head_slot->icon,
                    'wiki_name' => $head_slot->wiki_name,
                    'wiki_url' => $head_slot->wiki_url,
                    'equipment' => json_encode($head_slot->equipment),
                ));
            }
        }
    }
}
