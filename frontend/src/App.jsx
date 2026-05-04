import { useState, useEffect } from 'react';
import './index.css';
import './app.css';
import { Endpoints } from './api/endpoints';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import GeneratorView from './components/generator/generator-view';
import LoginModal from './components/ui/login-modal';
import SignUpModal from './components/ui/signup-modal';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    Endpoints.getSubjects()
      .then((response) => {
        console.log(response.data);
        setSemesters(response.data);
      })
      .catch((error) => {
        console.error('Hiba a tantárgyak lekérésekor:', error);
      });
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    alert('Sikeresen kijelentkeztél!');
  };

  return (
    <div className="app-container">
      <Sidebar onSelectSubject={setSelectedSubject} semesters={semesters} />
      <main className="main-content">
        <Navbar
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
          onLogout={handleLogout}
          user={user}
        />
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          setUser={setUser}
        />
        <SignUpModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          setUser={setUser}
        />
        {!selectedSubject ? (
          <div className="empty-state">
            Válassz egy tárgyat a bal oldali menüből!
          </div>
        ) : !user ? (
          <div className="empty-state">
            A tartalom megtekintéséhez kérlek jelentkezz be vagy regisztrálj!
            <div className="sign-in-register-btn-group">
              <button
                className="login-btn"
                onClick={() => setIsLoginOpen(true)}
              >
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
        ) : (
          <GeneratorView
            key={selectedSubject.id}
            subject={selectedSubject}
            user={user}
          />
        )}
      </main>
    </div>
  );
}

export default App;
