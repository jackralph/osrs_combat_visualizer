<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Prayer;

class PrayersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $prayers = json_decode(file_get_contents('database/json/prayers/prayers.json'));

        foreach($prayers as $prayer) {
            Prayer::create(array(
                'prayer_id' => $prayer->id,
                'name' => $prayer->name,
                'members' => $prayer->members,
                'description' => $prayer->description,
                'drain_per_minute' => $prayer->drain_per_minute,
                'wiki_url' => $prayer->wiki_url,
                'requirements' => json_encode($prayer->requirements),
                'bonuses' => json_encode($prayer->bonuses),
                'icon' => $prayer->icon,
            ));
        }
    }
}
