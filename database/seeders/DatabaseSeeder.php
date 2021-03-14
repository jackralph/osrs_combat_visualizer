<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PrayersTableSeeder::class,
            WeaponsTableSeeder::class,
            AmmunitionTableSeeder::class,
            BodiesTableSeeder::class,
            CapesTableSeeder::class,
            FeetTableSeeder::class,
        ]);
    }
}
