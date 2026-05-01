import { useState } from 'react';
import './index.css';
import './app.css';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import GeneratorView from './components/generator/generator-view';
import LoginModal from './components/ui/login-modal';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar
        onSelectSubject={setSelectedSubject}
        selectedId={selectedSubject?.id}
      />

      <main className="main-content">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
        {selectedSubject ? (
          <GeneratorView key={selectedSubject.id} subject={selectedSubject} />
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
