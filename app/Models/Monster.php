<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    use HasFactory;

    public $timestamps = FALSE;

    protected $fillable = [
        'monster_id',
        'combat_level',
        'hitpoints',
        'attributes',
        'category',
        'wiki_name',
        'wiki_url',
        'attack_level',
        'defence_level',
        'strength_level',
        'magic_level',
        'ranged_level',
        'attack_magic',
        'attack_ranged',
        'defence_stab',
        'defence_slash',
        'defence_crush',
        'defence_magic',
        'defence_ranged',
    ];
}
