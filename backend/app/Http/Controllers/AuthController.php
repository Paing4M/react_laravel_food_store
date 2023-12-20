<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {
  public function register(Request $request) {
    $data = $request->only(['email', 'name', 'password', 'password_confirmation']);

    $validate = Validator::validate($data, [
      'name' => 'required',
      'email' => 'required|unique:users|email',
      'password' => 'required',
      'password_confirmation' => 'required|same:password',
    ], [
      'password_confirmation.same' => 'Password does not match.'
    ]);

    $user = User::create([
      'name' => $validate['name'],
      'email' => $validate['email'],
      'password' => Hash::make($validate['password']),
    ]);

    if ($user) {
      $token = $user->createToken($validate['name'])->plainTextToken;
      return response()->json([
        'user' => $user,
        'token' => $token
      ]);
    }
  }

  public function login(Request $request) {
    $credentials = $request->validate([
      'email' => ['required', 'email'],
      'password' => ['required'],
    ]);

    $user = User::where('email', $credentials['email'])->first();

    if (!Auth::attempt($credentials)) {
      return response()->json([
        'message' => 'Email or password is not correct.'
      ], 401);
    }

    $token = $user->createToken($user->name)->plainTextToken;
    return response()->json([
      'user' => $user,
      'token' => $token,
      'status' => 200
    ]);
  }

  public function logout() {
    auth()->user()->tokens()->delete();
    return response()->json([
      'message' => 'Successfully logged out.'
    ]);
  }
}
