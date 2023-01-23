import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CardsList extends Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    axios.get('/api/cards').then(response => {
      this.setState({
        cards: response.data
      })
    })
  }

  render () {
    const { cards } = this.state
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All cards assigned</div>
              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                  Assign new cards
                </Link>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Player count</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cards.map(cards => (
                        <tr>
                          <td>
                            <Link
                              className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                              to={`/${cards.id}`}
                              key={cards.id}
                            >
                              {cards.id}
                            </Link>
                          </td>
                          <td>
                            {cards.player_count}
                          </td>
                          <td>
                            {cards.remarks}
                          </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardsList