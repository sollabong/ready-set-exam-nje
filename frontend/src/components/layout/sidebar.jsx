import { semesters } from '../../../mock-data';
import './sidebar.css';
import { logoIcon } from '../../assets';

const Sidebar = ({ onSelectSubject, selectedId }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoIcon} alt="Logo" />
      </div>
      <hr className="sidebar-divider" />
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
