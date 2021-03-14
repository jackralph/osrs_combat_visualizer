<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Body;

class BodiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bodies = json_decode(file_get_contents('database/json/equipment/bodies.json'));

        foreach($bodies as $body) {
            Body::create(array(
                'item_id' => $body->id,
                'name' => $body->name,
                'last_updated' => $body->last_updated,
                'incomplete' => $body->incomplete,
                'members' => $body->members,
                'tradeable' => $body->tradeable,
                'tradeable_on_ge' => $body->tradeable_on_ge,
                'stackable' => $body->stackable,
                'stacked' => $body->stacked,
                'noted' => $body->noted,
                'noteable' => $body->noteable,
                'linked_id_item' => $body->linked_id_item,
                'linked_id_noted' => $body->linked_id_noted,
                'linked_id_placeholder' => $body->linked_id_placeholder,
                'placeholder' => $body->placeholder,
                'equipable' => $body->equipable,
                'equipable_by_player' => $body->equipable_by_player,
                'equipable_weapon' => $body->equipable_weapon,
                'cost' => $body->cost,
                'lowalch' => $body->lowalch,
                'highalch' => $body->highalch,
                'weight' => $body->weight,
                'buy_limit' => $body->buy_limit,
                'quest_item' => $body->quest_item,
                'release_date' => $body->release_date,
                'duplicate' => $body->duplicate,
                'examine' => $body->examine,
                'icon' => $body->icon,
                'wiki_name' => $body->wiki_name,
                'wiki_url' => $body->wiki_url,
                'equipment' => json_encode($body->equipment),
                'weapon' => json_encode($body->weapon)
            ));
        }
    }
}
