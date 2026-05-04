import ReactDOM from 'react-dom';
import { Endpoints } from '../../api/endpoints';
import { useState } from 'react';

const SignUpModal = ({ isOpen, onClose, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await Endpoints.register({ email, password });
      const loginResponse = await Endpoints.login({ email, password });
      setUser(loginResponse.data.user);
      alert('Sikeres regisztráció!');
      onClose();
    } catch (err) {
      alert(err.response?.data?.error || 'Hiba történt!');
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Regisztráció</h2>
        <form onSubmit={handleRegister}>
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
            onChange={(e) => setPassword(e.target.value)} // Fontos: frissítjük az állapotot
            required
          />
          <button type="submit" className="login-btn">
            Regisztrálok
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

export default SignUpModal;
