<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\HeadSlot;

class EquipmentController extends Controller
{
    public function index(Request $request, $slot)
    {
        $search_query = $request->input('searchQuery');

        if ($slot === 'head') {

            $head_slots = HeadSlot::where('name', 'like', $search_query . '%')->paginate(15);

            return $head_slots;

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else if ($slot === 'cape') {

        } else {

        } 
    }
}
