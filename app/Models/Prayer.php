<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prayer extends Model
{
    use HasFactory;

    public $timestamps = FALSE;

    protected $fillable = [
        'id',
        'name',
        'members',
        'description',
        'drain_per_minute',
        'wiki_url',
        'requirements',
        'bonuses',
        'icon'
    ];
}
