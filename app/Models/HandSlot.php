<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HandSlot extends Model
{
    use HasFactory;

    public $timestamps = FALSE;

    protected $fillable = [
        'item_id',
        'name',
        'last_updated',
        'icon',
        'wiki_name',
        'wiki_url',
        'equipment',
    ];
}
