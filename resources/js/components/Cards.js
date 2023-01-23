import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import CardDetail from './CardDetail'
import CardsList from './CardsList'
import AssignCards from './AssignCards'

class Cards extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<CardsList />} />
            <Route exact path='/create' element={<AssignCards />} />
            <Route exact path='/:id' element={<CardDetail />}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Cards />, document.getElementById('cards_display'))