<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Weapon;

class WeaponsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $weapons = json_decode(file_get_contents('database/json/equipment/weapons.json'));

        $weapons_2h = json_decode(file_get_contents('database/json/equipment/weapons_2h.json'));

        foreach($weapons as $weapon) {
            Weapon::create(array(
                'item_id' => $weapon->id,
                'name' => $weapon->name,
                'last_updated' => $weapon->last_updated,
                'incomplete' => $weapon->incomplete,
                'members' => $weapon->members,
                'tradeable' => $weapon->tradeable,
                'tradeable_on_ge' => $weapon->tradeable_on_ge,
                'stackable' => $weapon->stackable,
                'stacked' => $weapon->stacked,
                'noted' => $weapon->noted,
                'noteable' => $weapon->noteable,
                'linked_id_item' => $weapon->linked_id_item,
                'linked_id_noted' => $weapon->linked_id_noted,
                'linked_id_placeholder' => $weapon->linked_id_placeholder,
                'placeholder' => $weapon->placeholder,
                'equipable' => $weapon->equipable,
                'equipable_by_player' => $weapon->equipable_by_player,
                'equipable_weapon' => $weapon->equipable_weapon,
                'cost' => $weapon->cost,
                'lowalch' => $weapon->lowalch,
                'highalch' => $weapon->highalch,
                'weight' => $weapon->weight,
                'buy_limit' => $weapon->buy_limit,
                'quest_item' => $weapon->quest_item,
                'release_date' => $weapon->release_date,
                'duplicate' => $weapon->duplicate,
                'examine' => $weapon->examine,
                'icon' => $weapon->icon,
                'wiki_name' => $weapon->wiki_name,
                'wiki_url' => $weapon->wiki_url,
                'equipment' => json_encode($weapon->equipment),
                'weapon' => json_encode($weapon->weapon),
                'two_handed' => false
            ));
        }

        foreach($weapons_2h as $weapon_2h) {
            Weapon::create(array(
                'item_id' => $weapon_2h->id,
                'name' => $weapon_2h->name,
                'last_updated' => $weapon_2h->last_updated,
                'incomplete' => $weapon_2h->incomplete,
                'members' => $weapon_2h->members,
                'tradeable' => $weapon_2h->tradeable,
                'tradeable_on_ge' => $weapon_2h->tradeable_on_ge,
                'stackable' => $weapon_2h->stackable,
                'stacked' => $weapon_2h->stacked,
                'noted' => $weapon_2h->noted,
                'noteable' => $weapon_2h->noteable,
                'linked_id_item' => $weapon_2h->linked_id_item,
                'linked_id_noted' => $weapon_2h->linked_id_noted,
                'linked_id_placeholder' => $weapon_2h->linked_id_placeholder,
                'placeholder' => $weapon_2h->placeholder,
                'equipable' => $weapon_2h->equipable,
                'equipable_by_player' => $weapon_2h->equipable_by_player,
                'equipable_weapon' => $weapon_2h->equipable_weapon,
                'cost' => $weapon_2h->cost,
                'lowalch' => $weapon_2h->lowalch,
                'highalch' => $weapon_2h->highalch,
                'weight' => $weapon_2h->weight,
                'buy_limit' => $weapon_2h->buy_limit,
                'quest_item' => $weapon_2h->quest_item,
                'release_date' => $weapon_2h->release_date,
                'duplicate' => $weapon_2h->duplicate,
                'examine' => $weapon_2h->examine,
                'icon' => $weapon_2h->icon,
                'wiki_name' => $weapon_2h->wiki_name,
                'wiki_url' => $weapon_2h->wiki_url,
                'equipment' => json_encode($weapon_2h->equipment),
                'weapon' => json_encode($weapon_2h->weapon),
                'two_handed' => true
            ));
        }
    }
}
