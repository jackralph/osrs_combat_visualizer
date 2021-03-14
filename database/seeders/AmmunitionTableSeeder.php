<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ammunition;

class AmmunitionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ammunition = json_decode(file_get_contents('database/json/equipment/ammunition.json'));

        foreach($ammunition as $ammunition_item) {
            Ammunition::create(array(
                'item_id' => $ammunition_item->id,
                'name' => $ammunition_item->name,
                'last_updated' => $ammunition_item->last_updated,
                'incomplete' => $ammunition_item->incomplete,
                'members' => $ammunition_item->members,
                'tradeable' => $ammunition_item->tradeable,
                'tradeable_on_ge' => $ammunition_item->tradeable_on_ge,
                'stackable' => $ammunition_item->stackable,
                'stacked' => $ammunition_item->stacked,
                'noted' => $ammunition_item->noted,
                'noteable' => $ammunition_item->noteable,
                'linked_id_item' => $ammunition_item->linked_id_item,
                'linked_id_noted' => $ammunition_item->linked_id_noted,
                'linked_id_placeholder' => $ammunition_item->linked_id_placeholder,
                'placeholder' => $ammunition_item->placeholder,
                'equipable' => $ammunition_item->equipable,
                'equipable_by_player' => $ammunition_item->equipable_by_player,
                'equipable_weapon' => $ammunition_item->equipable_weapon,
                'cost' => $ammunition_item->cost,
                'lowalch' => $ammunition_item->lowalch,
                'highalch' => $ammunition_item->highalch,
                'weight' => $ammunition_item->weight,
                'buy_limit' => $ammunition_item->buy_limit,
                'quest_item' => $ammunition_item->quest_item,
                'release_date' => $ammunition_item->release_date,
                'duplicate' => $ammunition_item->duplicate,
                'examine' => $ammunition_item->examine,
                'icon' => $ammunition_item->icon,
                'wiki_name' => $ammunition_item->wiki_name,
                'wiki_url' => $ammunition_item->wiki_url,
                'equipment' => json_encode($ammunition_item->equipment),
                'weapon' => json_encode($ammunition_item->weapon)
            ));
        }
    }
}
