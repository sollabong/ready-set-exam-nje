const LoggedOutView = ({ setIsLoginOpen, setIsRegisterOpen }) => {
  return (
    <div className="empty-state">
      A tartalom megtekintéséhez kérlek jelentkezz be vagy regisztrálj!
      <div className="sign-in-register-btn-group">
        <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
          BELÉPÉS
        </button>
        <button
          className="register-btn"
          onClick={() => setIsRegisterOpen(true)}
        >
          REGISZTRÁCIÓ
        </button>
      </div>
    </div>
  );
};

export default LoggedOutView;
