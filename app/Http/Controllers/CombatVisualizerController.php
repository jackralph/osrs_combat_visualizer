<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Potion;
use App\Models\Prayer;

class CombatVisualizerController extends Controller
{
    public function index()
    {
        $potions = Potion::all();
        $prayers = Prayer::all();

        return view('combat-visualizer', [
            'potions' => $potions,
            'prayers' => $prayers
        ]);
    }
}
