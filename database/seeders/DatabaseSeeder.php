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
            AmmoSlotsTableSeeder::class,
            BodySlotsTableSeeder::class,
            CapeSlotsTableSeeder::class,
            FootSlotsTableSeeder::class,
            HandSlotsTableSeeder::class,
            LegSlotsTableSeeder::class,
            NeckSlotsTableSeeder::class,
            PrayersTableSeeder::class,
            RingSlotsTableSeeder::class,
            ShieldSlotsTableSeeder::class,
            WeaponSlotsTableSeeder::class,
        ]);
    }
}
