<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Monster;

class MonstersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $monsters = json_decode(file_get_contents('database/json/monsters/monsters.json'));

        foreach($monsters as $monster) {
            if (!$monster->duplicate) {
                Monster::create(array(
                    'monster_id' => $monster->id,
                    'name' => $monster->name,
                    'combat_level' => $monster->combat_level,
                    'hitpoints' => $monster->hitpoints,
                    'attributes' => json_encode($monster->attributes),
                    'category' => json_encode($monster->category),
                    'wiki_name' => $monster->wiki_name,
                    'wiki_url' => $monster->wiki_url,
                    'attack_level' => $monster->attack_level,
                    'defence_level' => $monster->defence_level,
                    'strength_level' => $monster->strength_level,
                    'magic_level' => $monster->magic_level,
                    'ranged_level' => $monster->ranged_level,
                    'attack_magic' => $monster->attack_magic,
                    'attack_ranged' => $monster->attack_ranged,
                    'defence_stab' => $monster->defence_stab,
                    'defence_slash' => $monster->defence_slash,
                    'defence_crush' => $monster->defence_crush,
                    'defence_magic' => $monster->defence_magic,
                    'defence_ranged' => $monster->defence_ranged,
                ));
            }

        }
    }
}
