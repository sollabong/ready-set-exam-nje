import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import './app.css';

import { Endpoints } from './api/endpoints';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import GeneratorView from './components/generator/generator-view';
import LoginModal from './components/ui/login-modal';
import SignUpModal from './components/ui/signup-modal';
import Dashboard from './components/dashboard/dashboard';
import LoggedOutView from './components/layout/logged-out-view';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    Endpoints.getSubjects()
      .then((response) => {
        setSemesters(response.data);
      })
      .catch((error) => {
        console.error('Hiba a tantárgyak lekérésekor:', error);
      });
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <Router>
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
          <Routes>
            <Route
              path="/dashboard"
              element={
                !user ? (
                  <LoggedOutView
                    setIsLoginOpen={setIsLoginOpen}
                    setIsRegisterOpen={setIsRegisterOpen}
                  />
                ) : (
                  <Dashboard user={user} onLogout={handleLogout} />
                )
              }
            />
            <Route
              path="/generator"
              element={
                !user ? (
                  <LoggedOutView
                    setIsLoginOpen={setIsLoginOpen}
                    setIsRegisterOpen={setIsRegisterOpen}
                  />
                ) : !selectedSubject ? (
                  <div className="empty-state">
                    Válassz egy tárgyat a bal oldali menüből!
                  </div>
                ) : (
                  <GeneratorView
                    key={selectedSubject.id}
                    subject={selectedSubject}
                    user={user}
                  />
                )
              }
            />

            <Route path="/" element={<Navigate to="/generator" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
