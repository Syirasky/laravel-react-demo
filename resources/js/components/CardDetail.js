import axios from 'axios'
import React, { Component, useEffect , useState } from 'react'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'
// cardDetail is different from others. this one is using Hook. https://www.w3schools.com/react/react_hooks.asp
// Hooks allow function components to have access to state. no need to use component
function CardDetail() {
    // declare the cards state with empty array with useState
    const [ card , setCard] = useState([])
    const params = useParams()
    let cardId = params.id;
    // declare the isLoading and setIsLoading to true
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      axios.get(`/api/cards/${cardId}`).then(response => {
        setCard(response.data)
        console.log("card")
        console.log(card)
        setIsLoading(false)
      }).catch(error => console.log(error))
    },[])

    return(
      <div>
        {isLoading && <p>loading..</p>}

        
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card'>
              <div className='card-header'>Card id {card.id}</div>
                <div className='card-body'>
                    <p>{card.assigned_cards}</p>
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