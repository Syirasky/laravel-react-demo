import axios from 'axios'
import React, { Component } from 'react'

class CardDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      card: {}
    }
  }

  componentDidMount(){
    const cardId = this.props.match.params.id
    axios.get('/api/cards/${cardId}').then(response => {
      this.setState({
        card: response.data
      })
    })
  }

  render(){
    const { card } = this.state

    return(
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
            <div className='card-header'>{card.player_count}</div>
              <div className='card-body'>
                  <p>{card.assigned_cards}</p>
                  <p>{card.remarks}</p>
                  <hr />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardDetail 