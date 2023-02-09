<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\Order;
use App\Models\Product;
class ChatController extends Controller
{
    public function index()
    {
        return view('chat');
    }
}
