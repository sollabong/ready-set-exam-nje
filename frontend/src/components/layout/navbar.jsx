import './navbar.css';
import { logo } from '../../assets';

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="READYSETEXAM!" />
      <div className="nav-actions">
        {user ? (
          <button className="login-btn" onClick={onLogout}>
            SIGN OUT
          </button>
        ) : (
          <>
            <button className="login-btn" onClick={onLoginClick} style={{ marginRight: '10px' }}>
              SIGN IN
            </button>
            <button className="register-btn" onClick={onRegisterClick}>
              SIGN UP
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
