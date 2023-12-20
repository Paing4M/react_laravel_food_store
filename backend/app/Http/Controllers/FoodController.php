<?php

namespace App\Http\Controllers;

use App\Http\Resources\FoodResource;
use App\Models\Food;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $foods = Food::paginate(10);
        return new FoodResource($foods);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Food $food)
    {
        return new FoodResource($food);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Food $food)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Food $food)
    {
        //
    }

    // get food by search result
    public function foodBySearch (Request $request){
      $foods = Food::where('name' , 'LIKE' , '%' . $request->searchTerm . '%')->paginate(10);
      return new FoodResource($foods);
    }

    // get food by tag
    public function foodByTag (Request $request){
      $foods = Food::paginate(10);
      if ($request->tag !== 'All') {
        $foods = Food::where('tags', 'LIKE', '%' . $request->tag . '%')->paginate(10);
      }
      return new FoodResource($foods);
    }
}
