import { useState, useEffect } from 'react';
import './generator-view.css';
import TaskCard from './task-card';
import { Endpoints } from '../../api/endpoints';

const GeneratorView = ({ subject, user }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  useEffect(() => {
    Endpoints.getTasks(subject.id).then((res) => setTasks(res.data));
  }, [subject.id]);

  const handleStatusUpdate = async (taskId, newStatus) => {
    await Endpoints.updateProgress({
      user_id: user.id,
      task_id: taskId,
      status: newStatus,
    });
  };

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setTask(tasks[randomIndex]);
  };

  return (
    <div className="generator-view">
      {!task ? (
        <div className="generator-prompt">
          <h2>{subject.name}</h2>
          <button className="generate-btn" onClick={handleGenerate}>
            FELADAT GENERÁLÁSA
          </button>
        </div>
      ) : (
        <div className="task-container">
          <h2 className="task-subject-title">{subject.name}</h2>
          <TaskCard
            task={task}
            key={task.id}
            onStatusChange={(status) => handleStatusUpdate(task.id, status)}
            onNext={handleGenerate}
          />
        </div>
      )}
    </div>
  );
};

export default GeneratorView;
