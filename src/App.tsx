import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Products />
    </div>
  )
}

export default App