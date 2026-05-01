import './navbar.css';
import { logo } from '../../assets';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="READYSETEXAM!" />
      <button className="login-btn" onClick={onLoginClick}>
        LOGIN
      </button>
    </nav>
  );
};

export default Navbar;
