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

  useEffect(() => {
    Endpoints.getSubjects()
      .then(response => {
        console.log(response.data);
        setSemesters(response.data);
      })
      .catch(error => {
        console.error("Hiba a tantárgyak lekérésekor:", error);
      });
  }, []);

  return (
    <div className="app-container">
      <Sidebar
        onSelectSubject={setSelectedSubject}
        semesters={semesters}
      />
      <main className="main-content">
        <Navbar 
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
          />
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
        <SignUpModal 
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)} 
        />
        {selectedSubject ? (
          <GeneratorView
            key={selectedSubject.id}
            subject={selectedSubject}
          />
        ) : (
          <div className="empty-state">
            Válassz egy tárgyat a bal oldali menüből!
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
