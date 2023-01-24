<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Helpers\CardsHelper;
use App\Models\cards;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all the cards details
        $cards = cards::select('*')->get();
        return $cards->tojson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        // validate the request
        $validated_request = $request->validate([
            'player_count'=>'required'
        ]);
        
        // only for valid player count
        if( !is_numeric($validated_request['player_count']) || ($validated_request['player_count'] > 0 && !empty($validated_request['player_count']))){
            $assigned_cards = CardsHelper::assign($validated_request['player_count']);
            try{
                $remarks = $request->input('remarks','');
                $assigned_cards = json_encode($assigned_cards);
                $card = cards::create([
                    'player_count' => $validated_request['player_count'],
                    'assigned_cards' => $assigned_cards,
                    'remarks' => $remarks
                ]);
                return $card->toJson();
            }catch(\Exception $e){
                Log::info($e->getMessage());
                return response()->json(['message'=>'Error saving data'],500);
            }
        }else{
            return response()->json(['message'=>'Must be valid player count'],500);
        }
        
    }
    
    /**
     * show
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cards = cards::find($id)->orderBy('id','DESC')->first();
        if(!empty($cards)){
            $result['id'] = $cards['id'];
            $result['player_count'] = $cards['player_count'];
            $result['assigned_cards'] = json_decode($cards['assigned_cards']);
            $result['remarks'] = $cards['remarks'];
            return $result;
        }else{
            return response()->json(['message'=>'Data not found'],404);
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cards  $cards
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cards $cards)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cards  $cards
     * @return \Illuminate\Http\Response
     */
    public function destroy(cards $cards)
    {
        //
    }
}
