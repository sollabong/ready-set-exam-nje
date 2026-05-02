import { useState, useEffect } from 'react';
import './generator-view.css';
import TaskCard from './task-card';
import { Endpoints } from '../../api/endpoints';

const GeneratorView = ({ subject }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setTask(null);

    Endpoints.getTasks(subject.id)
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Hiba a feladatok betöltésekor:", error);
        setLoading(false);
      });
  }, [subject]);

  const handleGenerate = () => {
    if (tasks.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setTask(tasks[randomIndex]);
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
          <h2 className="task-subject-title">{subject.name}</h2>
          <TaskCard task={task} />
          <div className="actions">
            <button className="generate-btn" onClick={handleGenerate}>
              Következő feladat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorView;
