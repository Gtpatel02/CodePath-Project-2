import React from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>How well do you know the world?</h1>
      <h2>Take this Geography Quiz to find!</h2>
      <h3>Total number of cards: 10</h3>
      <Cards />
    </div>
  )
}

export default App
