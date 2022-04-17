import React from 'react';
import { useNavigate } from 'react-router-dom'

import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  }

  return (
    <header className="app-header">
      <div className="app-header__info">
        <img onClick={goToMainPage} src={logo} alt="Ubiquity Logo" />
        <h2>Devices</h2>
      </div>
      <div className="app-header__author">
        <h3>Joan Gerard</h3>
      </div>
    </header>
  )
}

export default Header