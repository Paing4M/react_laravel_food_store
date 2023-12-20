<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('foods', function (Blueprint $table) {
          $table->id();
          $table->text('name');
          $table->text('price');
          $table->text('cookTime');
          $table->tinyInteger('favorite')->nullable()->default(0); // 0 means not favorite
          $table->longText('origins')->nullable();
          $table->text('stars');
          $table->text('imageUrl');
          $table->longText('tags')->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods');
    }
};
