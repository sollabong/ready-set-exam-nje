import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Endpoints } from '../../api/endpoints';
import './dashboard.css';

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({ total: 0, learned: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Itt hívod a korábban megbeszélt SQL lekérdezést
      Endpoints.getUserStats(user.id).then((res) => setStats(res.data));
    }
  }, [user]);

  const progressPercent =
    stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Üdvözöllek, {user?.name || 'Hallgató'}! 👋</h1>
        <p>Folytasd a felkészülést ott, ahol abbahagytad.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Haladás</h3>
          <div className="progress-circle">
            <span className="percent">{progressPercent}%</span>
          </div>
          <p>
            Összes megtanult tétel:{' '}
            <strong>
              {stats.learned} / {stats.total}
            </strong>
          </p>
        </div>

        <div className="stat-card">
          <h3>Gyors indítás</h3>
          <p>
            Válassz egy tárgyat a bal oldali menüből, vagy kattints ide a
            legutóbbihoz:
          </p>
          <button
            className="generate-btn"
            onClick={() => navigate('/generator')}
          >
            TANULÁS FOLYTATÁSA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
