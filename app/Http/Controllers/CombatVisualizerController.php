<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Potion;
use App\Models\Prayer;
use App\Models\Monster;

class CombatVisualizerController extends Controller
{
    public function index()
    {
        $potions = Potion::all();
        $prayers = Prayer::all();
        $monsters = Monster::all();

        return view('combat-visualizer', [
            'potions' => $potions,
            'prayers' => $prayers,
            'monsters' => $monsters
        ]);
    }
}
