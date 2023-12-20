<?php

namespace Database\Seeders;

use App\Models\Food;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $foods = [

          [
            'name' => 'Pizza Pepperoni',
            'cookTime' => '10-20',
            'price' => 10,
            'favorite' => 0,
            'origins' => 'italy',
            'stars' => 4.5,
            'imageUrl' => 'food-1.jpg',
            'tags' => 'FastFood, Pizza, Lunch',
          ],
          [
            'name' => 'Meatball',
            'cookTime' => '20-30',
            'price' => 20,
            'favorite' => 0,
            'origins' => 'persia, middle east, china',
            'stars' => 5,
            'imageUrl' => 'food-2.jpg',
            'tags' => 'SlowFood, Lunch',
          ],
          [
            'name' => 'Fried Potatoes',
            'cookTime' => '15-20',
            'price' => 2,
            'favorite' => 0,
            'origins' => 'belgium, france',
            'stars' => 3,
            'imageUrl' => 'food-4.jpg',
            'tags' => 'FastFood, Pizza, Lunch',
          ],
          [
            'name' => 'Hamburger',
            'cookTime' => '10-15',
            'price' => 5,
            'favorite' => 1,
            'origins' => 'germany, us',
            'stars' => 3.5,
            'imageUrl' => 'food-3.jpg',
            'tags' => 'FastFood, Hamburger',
          ],
          [
            'name' => 'Chicken Soup',
            'cookTime' => '40-50',
            'price' => 11,
            'favorite' => 1,
            'origins' => 'india, asia',
            'stars' => 3.5,
            'imageUrl' => 'food-5.jpg',
            'tags' => 'SlowFood, Soup',
          ],
          [
            'name' => 'Vegetables Pizza',
            'cookTime' => '10-20',
            'price' =>9,
            'favorite' => 0,
            'origins' => 'italy',
            'stars' => 4.5,
            'imageUrl' => 'food-6.jpg',
            'tags' => 'FastFood, Pizza, Lunch',
          ],
        ];

      foreach ($foods as $foodData) {

        Food::create($foodData);
      }
    }
}
