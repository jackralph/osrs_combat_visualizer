<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Monster;
use Illuminate\Support\Str;

class MonsterController extends Controller
{
    public function index(Request $request)
    {
        $search_query = $request->input('searchQuery');

        $monsters = Monster::where('name', 'like', $search_query . '%')->paginate(15);

        return $monsters;
    }
}
