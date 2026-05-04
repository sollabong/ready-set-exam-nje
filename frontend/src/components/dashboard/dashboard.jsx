import { useEffect, useState } from 'react';
import { Endpoints } from '../../api/endpoints';
import './dashboard.css';
import ProgressCircle from './progress-circle';
import UserLevel from './user-level';

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    total: 0,
    learned: 0,
    repeat: 0,
  });

  useEffect(() => {
    if (user) {
      Endpoints.getUserStats(user.id).then((res) => {
        setStats(res.data);
        console.log('Felhasználói statisztikák:', res.data);
      });
    }
  }, [user]);

  const learned = parseInt(stats.learned_tasks) || 0;
  const repeat = parseInt(stats.repeat_tasks) || 0;
  const total = parseInt(stats.total_tasks) || 1;
  const completed = learned + repeat;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Üdvözöllek, 'Hallgató'! 👋</h1>
        <p>Folytasd a felkészülést ott, ahol abbahagytad.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Megtanult</h3>
          <ProgressCircle percent={(learned / total) * 100} color="#00ffd5" />
          <p>
            {learned} / {total}
          </p>
        </div>

        <div className="stat-card">
          <h3>Ismétlésre vár</h3>
          <ProgressCircle
            percent={(repeat / total) * 100}
            color="var(--primary-color)"
          />
          <p>
            {repeat} / {total}
          </p>
        </div>

        <div className="stat-card">
          <h3>Elvégzett</h3>
          <ProgressCircle
            percent={(completed / total) * 100}
            color="var(--accent-color)"
          />
          <p>
            {completed} / {total}
          </p>
        </div>
      </div>
      <UserLevel learned={learned} />
    </div>
  );
};

export default Dashboard;
