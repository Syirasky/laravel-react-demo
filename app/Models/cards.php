<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cards extends Model
{
    use HasFactory;
    protected $fillable = ['player_count','assigned_cards','remarks','is_archived'];
}
