import axios from 'axios'
import React, { Component, useEffect , useState } from 'react'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'

// cardDetail is different from others. this one is using Hook. https://www.w3schools.com/react/react_hooks.asp
// Hooks allow function components to have access to state. no need to use component
function CardDetail() {

  // declare the cards state with empty array with useState
    const [ card , setCard] = useState({})
    const params = useParams()
    let cardId = params.id;

    // declare the isLoading and setIsLoading to true
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      axios.get(`/api/cards/${cardId}`).then(response => {
        console.log(response.data)
        setCard(response.data)
        setIsLoading(false)
      }).catch(error => console.log(error))
    },[]);

    function formatAssignedCards(assigned_cards){
      if(assigned_cards){
        const assinged_cards_arr = JSON.parse(JSON.stringify(assigned_cards))
        var display = (
          <div>
            <ol>
              
              {assinged_cards_arr.map(function(d, idx){
                return (<li key={idx}>{d}</li>)
              })}
              
            </ol>
          </div>
        )
      }else{
        var display = (
          <div>
            <ul>
              <li>
              No data yet
              </li>
            </ul>
          </div>
        )
      }
      return display

    }

    return(
      <div>
        {isLoading && <p>loading..</p>}
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card'>
              <div className='card-header'>Card id {card.id} , Player count {card.player_count}</div>
                <div className='card-body'>
                    {formatAssignedCards(card.assigned_cards)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}
// this functional component dont need to render like the class component did. functional component will just return us the output already
export default CardDetail 