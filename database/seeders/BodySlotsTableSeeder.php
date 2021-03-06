<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BodySlot;

class BodySlotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $body_slots = json_decode(file_get_contents('database/json/equipment/body_slots.json'));

        foreach($body_slots as $body_slot) {
            if (!$body_slot->duplicate) {
                BodySlot::create(array(
                    'item_id' => $body_slot->id,
                    'name' => $body_slot->name,
                    'last_updated' => $body_slot->last_updated,
                    'icon' => $body_slot->icon,
                    'wiki_name' => $body_slot->wiki_name,
                    'wiki_url' => $body_slot->wiki_url,
                    'equipment' => json_encode($body_slot->equipment),
                ));
            }
        }
    }
}
