import ReactDOM from 'react-dom';
import './login-modal.css';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Bejelentkezés</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email cím" />
          <input type="password" placeholder="Jelszó" />
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
