<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShieldSlot extends Model
{
    use HasFactory;

    public $timestamps = FALSE;

    protected $fillable = [
        'item_id',
        'name',
        'last_updated',
        'incomplete',
        'members',
        'tradeable',
        'tradeable_on_ge',
        'stackable',
        'stacked',
        'noted',
        'noteable',
        'linked_id_item',
        'linked_id_noted',
        'linked_id_placeholder',
        'placeholder',
        'equipable',
        'equipable_by_player',
        'equipable_weapon',
        'cost',
        'lowalch',
        'highalch',
        'weight',
        'buy_limit',
        'quest_item',
        'release_date',
        'duplicate',
        'examine',
        'icon',
        'wiki_name',
        'wiki_url',
        'equipment',
        'weapon'
    ];
}
