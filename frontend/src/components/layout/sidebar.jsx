import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import { logoIcon } from '../../assets';

const Sidebar = ({ onSelectSubject, semesters }) => {
  const navigate = useNavigate();

  const handleSubjectClick = (sub) => {
    onSelectSubject(sub);
    navigate('/generator');
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoIcon} alt="Logo" />
      </div>
      <hr className="sidebar-divider" />
      {semesters.map((sem, index) => (
        <div key={index} className="semester-group">
          <div className="semester-label">{sem.semester_name}</div>
          <ul className="subject-list">
            {sem.subjects.map((sub) => (
              <li key={sub.id} onClick={() => handleSubjectClick(sub)}>
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
