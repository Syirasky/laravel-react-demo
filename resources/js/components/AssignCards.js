import axios from 'axios'
import React, { Component } from 'react'

class AssignCards extends Component {
    constructor (props) {
      super(props)
      this.state = {
        player_count: '',
        remarks: '',
        errors: []
      }
      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.handleCreateNewCardsAssigns = this.handleCreateNewCardsAssigns.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleCreateNewCardsAssigns (event) {
      event.preventDefault()

      const { history } = this.props

      const cards = {
        player_count: this.state.player_count,
        remarks: this.state.remarks
      }

      axios.post('/api/cards', cards)
        .then(response => {
          // redirect to the homepage
          history.push('/')
        })
        .catch(error => {
          this.setState({
            errors: error.response.data.errors
          })
        })
    }

    hasErrorFor (field) {
      return !!this.state.errors[field]
    }

    renderErrorFor (field) {
      if (this.hasErrorFor(field)) {
        return (
          <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
          </span>
        )
      }
    }

    render () {
      return (
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>Create new cards</div>
                <div className='card-body'>
                  <form onSubmit={this.handleCreateNewCardsAssigns}>
                    <div className='form-group'>
                      <label htmlFor='name'>Player Count</label>
                      <input
                        id='player_count'
                        type='text'
                        className={`form-control ${this.hasErrorFor('player_count') ? 'is-invalid' : ''}`}
                        name='player_count'
                        value={this.state.player_count}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('name')}
                    </div>
                    <div className='form-group'>
                      <label htmlFor='description'>Cards remarks</label>
                      <textarea
                        id='remarks'
                        className={`form-control ${this.hasErrorFor('remarks') ? 'is-invalid' : ''}`}
                        name='remarks'
                        rows='10'
                        value={this.state.remarks}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('description')}
                    </div>
                    <button className='btn btn-primary'>Create</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default AssignCards