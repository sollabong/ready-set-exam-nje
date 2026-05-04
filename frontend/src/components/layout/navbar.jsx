import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { logo } from '../../assets';

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="READYSETEXAM!" />
      <div className="nav-actions">
        {user ? (
          <>
            <button
              className="dashboard-btn"
              onClick={() => navigate('/dashboard')}
            >
              DASHBOARD
            </button>
            <button className="logout-btn" onClick={onLogout}>
              KILÉPÉS
            </button>
          </>
        ) : (
          <>
            <button
              className="login-btn"
              onClick={onLoginClick}
              style={{ marginRight: '10px' }}
            >
              BELÉPÉS
            </button>
            <button className="register-btn" onClick={onRegisterClick}>
              REGISZTRÁCIÓ
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
