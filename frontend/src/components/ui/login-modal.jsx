import ReactDOM from 'react-dom';
import { useState } from 'react';
import './login-modal.css';
import { Endpoints } from '../../api/endpoints';

const LoginModal = ({ isOpen, onClose, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Endpoints.login({ email, password });
      const userData = response.data.user;

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      onClose();
    } catch (err) {
      alert(err.response?.data?.error || 'Hibás email vagy jelszó!');
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Bejelentkezés</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email cím"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Belépés
          </button>
        </form>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default LoginModal;
