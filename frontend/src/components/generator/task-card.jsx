import { useState } from 'react';
import './task-card.css';

const TaskCard = ({ task }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="task-card">
      <h2 className="task-question">{task.question}</h2>
      
      {!showSolution ? (
        <button className="reveal-btn" onClick={() => setShowSolution(true)}>
          Megoldás mutatása
        </button>
      ) : (
        <div className="solution-section">
          <hr />
          <p><strong>Válasz:</strong> {task.answer}</p>
          <p><em>Magyarázat:</em> {task.explain}</p>
        </div>
      )}
    </div>
  );
};

export default TaskCard;