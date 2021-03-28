<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CombatVisualizerController;
use App\Http\Controllers\MonsterController;
use App\Http\Controllers\EquipmentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [CombatVisualizerController::class, 'index']);
Route::get('/monsters', [MonsterController::class, 'index']);
Route::get('/equipment/{slot}', [EquipmentController::class, 'index']);
