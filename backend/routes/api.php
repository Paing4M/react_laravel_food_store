<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

// auth
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
  Route::post('logout', [AuthController::class, 'logout']);
});


// foods
Route::apiResource('foods', FoodController::class);
Route::get('/search/foods', [FoodController::class, 'foodBySearch']);
Route::get('/tag/foods', [FoodController::class, 'foodByTag']);
