import { semesters } from '../../../mock-data';
import './sidebar.css';
import { logoIcon } from '../../assets';

const Sidebar = ({ onSelectSubject, selectedId }) => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logoIcon} alt="Logo" />
      </div>

      <h3 className="sidebar-main-title">FÉLÉVEK</h3>

      {semesters.map((sem) => (
        <div key={sem.id} className="semester-group">
          <div className="semester-label">{sem.name}</div>
          <ul className="subject-list">
            {sem.subjects.map((sub) => (
              <li 
                key={sub.id} 
                className={selectedId === sub.id ? 'active' : ''}
                onClick={() => onSelectSubject(sub)}
              >
                {sub.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;