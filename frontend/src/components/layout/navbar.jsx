import './navbar.css';
import { logo } from '../../assets';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="READYSETEXAM!" />
      <button className="login-btn">LOGIN</button>
    </nav>
  );
};

export default Navbar;