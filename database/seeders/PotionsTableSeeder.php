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
                'incomplete' => $potion->incomplete,
                'members' => $potion->members,
                'tradeable' => $potion->tradeable,
                'tradeable_on_ge' => $potion->tradeable_on_ge,
                'stackable' => $potion->stackable,
                'stacked' => $potion->stacked,
                'noted' => $potion->noted,
                'noteable' => $potion->noteable,
                'linked_id_item' => $potion->linked_id_item,
                'linked_id_noted' => $potion->linked_id_noted,
                'linked_id_placeholder' => $potion->linked_id_placeholder,
                'placeholder' => $potion->placeholder,
                'equipable' => $potion->equipable,
                'equipable_by_player' => $potion->equipable_by_player,
                'equipable_weapon' => $potion->equipable_weapon,
                'cost' => $potion->cost,
                'lowalch' => $potion->lowalch,
                'highalch' => $potion->highalch,
                'weight' => $potion->weight,
                'buy_limit' => $potion->buy_limit,
                'quest_item' => $potion->quest_item,
                'release_date' => $potion->release_date,
                'duplicate' => $potion->duplicate,
                'examine' => $potion->examine,
                'icon' => $potion->icon,
                'wiki_name' => $potion->wiki_name,
                'wiki_url' => $potion->wiki_url,
                'equipment' => json_encode($potion->equipment),
                'weapon' => json_encode($potion->weapon),
                'bonuses' => json_encode($potion->bonuses)
            ));
        }
    }
}
