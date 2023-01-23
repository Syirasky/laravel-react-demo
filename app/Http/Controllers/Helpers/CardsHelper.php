<?php
namespace App\Http\Controllers\Helpers;


class CardsHelper
{
    const cards_available = [
        "S-A","H-A","D-A","C-A",
        "S-2","H-2","D-2","C-2",
        "S-3","H-3","D-3","C-3",
        "S-4","H-4","D-4","C-4",
        "S-5","H-5","D-5","C-5",
        "S-6","H-6","D-6","C-6",
        "S-7","H-7","D-7","C-7",
        "S-8","H-8","D-8","C-8",
        "S-9","H-9","D-9","C-9",
        "S-X","H-X","D-X","C-X",
        "S-J","H-J","D-J","C-J",
        "S-Q","H-Q","D-Q","C-Q",
        "S-K","H-K","D-K","C-K"
    ];
    
    /**
     * assign
     * assign cards to the players based on available cards
     * @param  integer $player_count
     * @return string
     */
    public static function assign($player_count){
        $cards_available = CardsHelper::cards_available;
        $i = 0;
        $cards_assigned = array();
        shuffle($cards_available);
        $player_index = 0;
        $size_cards = count($cards_available);
        while($i < $size_cards){
            $temp_assigned = !empty($cards_assigned[$player_index]) ? $cards_assigned[$player_index] : "";
            $cards_assigned[$player_index] = $temp_assigned.$cards_available[$i].",";
            // increment the index for the next player
            $player_index++;
            // reset if the assignment already reached the end of the last player
            if($player_index == $player_count){
                $player_index = 0;
            }

            // increment card count 
            $i++;

        }
        
        return $cards_assigned;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
}