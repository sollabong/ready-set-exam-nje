import { useState } from 'react';
import './index.css';
import './app.css';
import Sidebar from './components/layout/sidebar';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="app-container">
      <Sidebar 
        onSelectSubject={setSelectedSubject} 
        selectedId={selectedSubject?.id} 
      />

      <main className="main-content">

        {!selectedSubject ? (
          <div>Válassz egy tárgyat a bal oldali menüből!</div>
        ) : (
          <div>
            <h1>Vizsgára készülés</h1>
            <p>{selectedSubject} - Jó gyakorlást!</p>
            <button 
              className="generate-btn" 
              onClick={() => setSelectedSubject(null)}
            >
              Minta feladatsor generálás
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;