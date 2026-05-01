import { useState } from 'react';
import './generator-view.css';
import TaskCard from './task-card';

const GeneratorView = ({ subject }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setTask({ /* ... dummy adatok ... */ });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="generator-view">
      {!task ? (
        <div className="generator-prompt">
          <h2>{subject.name}</h2>
          <button className="generate-btn" onClick={handleGenerate}>
            {loading ? 'Generálás...' : 'FELADAT GENERÁLÁSA'}
          </button>
        </div>
      ) : (
        <div className="task-container">
          <TaskCard task={task} />
          <div className="actions">
            <button className="generate-btn" onClick={handleGenerate}>Következő feladat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorView;