import { useNavigate } from 'react-router-dom'
import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();

  const goToMainPage = async () => {
    navigate('/');
  }

  return (
    <header className="app-header">
      <div className="app-header__info">
        <img onClick={goToMainPage} src={logo} alt="Ubiquity Logo" />
        <h4>Devices</h4>
      </div>
      <div className="app-header__author">
        <h4>Joan Gerard</h4>
      </div>
    </header>
  )
}

export default Header