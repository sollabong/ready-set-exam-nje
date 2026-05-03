import { useState } from 'react';
import './task-card.css';

const TaskCard = ({ task, onStatusChange, onNext }) => {
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
          <div className="solution-content">
            <div className="answer-box">
              <h3>Helyes válasz:</h3>
              <p>{task.answer}</p>
            </div>
            
            <div className="explain-box">
              <h4>Magyarázat:</h4>
              <p>{task.explain}</p>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-review" onClick={() => onStatusChange('repeat')}>
              MÉG ISMÉTELNÉM
            </button>
            <button className="btn-learned" onClick={() => onStatusChange('learned')}>
              MEGTANULTAM
            </button>
            <button className="btn-next" onClick={onNext}>
              KÖVETKEZŐ FELADAT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;