import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Products from './components/Products/Products';

const App = () => {

  const [isGrid, setIsGrid] = useState(false)
  console.log('isGrid', isGrid)

  const switchToGrid = () => {
    setIsGrid(true)
  }
  const switchToView = () => {
    setIsGrid(false)
  }

  return (
    <div className="app">
      <Header />
      <SearchBar switchToGrid={switchToGrid} switchToView={switchToView} />
      <Products isGrid={isGrid} />
    </div>
  )
}

export default App