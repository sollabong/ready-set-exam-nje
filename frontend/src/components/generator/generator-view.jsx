import { useState, useEffect } from 'react';
import './generator-view.css';
import TaskCard from './task-card';
import { Endpoints } from '../../api/endpoints';

const GeneratorView = ({ subject, user }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    Endpoints.getTasks(subject.id).then((res) => setTasks(res.data));
    Endpoints.getProgress(user.id).then((res) => {
      const map = {};
      res.data.forEach(item => map[item.task_id] = item.status);
      setProgressMap(map);
    });
  }, [subject.id, user.id]);

  const handleStatusUpdate = async (taskId, newStatus) => {
    await Endpoints.updateProgress({
      user_id: user.id,
      task_id: taskId,
      status: newStatus,
    });
    setProgressMap(prev => ({ ...prev, [taskId]: newStatus }));
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
            status={progressMap[task.id]}
            onStatusChange={(status) => handleStatusUpdate(task.id, status)}
            onNext={handleGenerate}
          />
        </div>
      )}
    </div>
  );
};

export default GeneratorView;
