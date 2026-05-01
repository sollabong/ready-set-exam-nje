import { useState } from 'react';
import './index.css';
import './app.css';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import GeneratorView from './components/generator/generator-view';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="app-container">
      <Sidebar 
        onSelectSubject={setSelectedSubject} 
        selectedId={selectedSubject?.id} 
      />

      <main className="main-content">

        <Navbar />
        {selectedSubject ? (
          <GeneratorView subject={selectedSubject} />
        ) : (
          <div className="empty-state">Válassz egy tárgyat a bal oldali menüből!</div>
        )}
      </main>
    </div>
  );
}

export default App;