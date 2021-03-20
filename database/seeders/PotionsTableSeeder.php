<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Potion;

class PotionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $potions = json_decode(file_get_contents('database/json/potions/potions.json'));

        foreach($potions as $potion) {
            Potion::create(array(
                'item_id' => $potion->id,
                'name' => $potion->name,
                'last_updated' => $potion->last_updated,
                'equipable' => $potion->equipable,
                'equipable_by_player' => $potion->equipable_by_player,
                'equipable_weapon' => $potion->equipable_weapon,
                'duplicate' => $potion->duplicate,
                'icon' => $potion->icon,
                'wiki_name' => $potion->wiki_name,
                'wiki_url' => $potion->wiki_url,
                'bonuses' => json_encode($potion->bonuses)
            ));
        }
    }
}
