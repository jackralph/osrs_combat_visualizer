<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Potion;
use App\Models\Prayer;
use App\Models\Monster;
use App\Models\AmmoSLot;
use App\Models\BodySlot;
use App\Models\CapeSlot;
use App\Models\FootSlot;
use App\Models\HandSlot;
use App\Models\HeadSlot;
use App\Models\LegSlot;
use App\Models\NeckSlot;
use App\Models\RingSlot;
use App\Models\ShieldSlot;
use App\Models\WeaponSlot;

class CombatVisualizerController extends Controller
{
    public function index()
    {
        $potions = Potion::all();
        $prayers = Prayer::all();
        $monsters = Monster::paginate(15)->toArray()['data'];
        $ammo_slots = AmmoSlot::paginate(15)->toArray()['data'];
        $body_slots = BodySlot::paginate(15)->toArray()['data'];
        $cape_slots = CapeSlot::paginate(15)->toArray()['data'];
        $foot_slots = FootSlot::paginate(15)->toArray()['data'];
        $hand_slots = HandSlot::paginate(15)->toArray()['data'];
        $head_slots = HeadSlot::paginate(15)->toArray()['data'];
        $leg_slots = LegSlot::paginate(15)->toArray()['data'];
        $neck_slots = NeckSlot::paginate(15)->toArray()['data'];
        $ring_slots = RingSlot::paginate(15)->toArray()['data'];
        $shield_slots = ShieldSlot::paginate(15)->toArray()['data'];
        $weapon_slots = WeaponSlot::paginate(15)->toArray()['data'];

        return view('combat-visualizer', [
            'potions' => $potions,
            'prayers' => $prayers,
            'monsters' => $monsters,
            'ammo_slots' => $ammo_slots,
            'body_slots' => $body_slots,
            'cape_slots' => $cape_slots,
            'foot_slots' => $foot_slots,
            'hand_slots' => $hand_slots,
            'head_slots' => $head_slots,
            'leg_slots' => $leg_slots,
            'neck_slots' => $neck_slots,
            'ring_slots' => $ring_slots,
            'shield_slots' => $shield_slots,
            'weapon_slots' => $weapon_slots,
        ]);
    }
}
