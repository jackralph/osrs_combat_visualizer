<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

class EquipmentController extends Controller
{
    public function index(Request $request, $slot)
    {
        $search_query = $request->input('searchQuery');

        if ($slot === 'ammo') {

            $ammo_slots = AmmoSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $ammo_slots;

        } else if ($slot === 'body') {
            
            $body_slots = BodySlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $body_slots;

        } else if ($slot === 'cape') {

            $cape_slots = CapeSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $cape_slots;

        } else if ($slot === 'foot') {

            $foot_slots = FootSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $foot_slots;

        } else if ($slot === 'hand') {

            $hand_slots = HandSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $hand_slots;

        } else if ($slot === 'head') {

            $head_slots = HeadSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $head_slots;

        } else if ($slot === 'leg') {

            $leg_slots = LegSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $leg_slots;

        } else if ($slot === 'neck') {

            $neck_slots = NeckSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $neck_slots;

        } else if ($slot === 'ring') {

            $ring_slots = RingSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $ring_slots;

        } else if ($slot === 'shield') {

            $shield_slots = ShieldSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $shield_slots;

        } else {

            $weapon_slots = WeaponSlot::where('name', 'like', "%{$search_query}%")->paginate(15);

            return $weapon_slots;

        } 
    }
}
