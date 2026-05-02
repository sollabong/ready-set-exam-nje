import ReactDOM from 'react-dom';

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Regisztráció</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email cím" />
          <input type="password" placeholder="Jelszó" />
          <input type="password" placeholder="Jelszó megerősítése" />
          <button type="submit" className="register-btn">
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