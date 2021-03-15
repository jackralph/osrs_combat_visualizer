<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Potion;

class CombatVisualizerController extends Controller
{
    public function index()
    {
        $potions = Potion::all();

        return view('combat-visualizer', [
            'potions' => $potions
        ]);
    }
}
