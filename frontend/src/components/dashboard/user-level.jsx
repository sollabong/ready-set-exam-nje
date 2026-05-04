import './user-level.css';

const levels = [
  { name: 'Kezdő', threshold: 0 },
  { name: 'Tanuló', threshold: 8 },
  { name: 'Gyakorló', threshold: 16 },
  { name: 'Szorgos', threshold: 24 },
  { name: 'Haladó', threshold: 32 },
  { name: 'Tudatos', threshold: 40 },
  { name: 'Felkészült', threshold: 50 },
  { name: 'Mester', threshold: 65 },
  { name: 'Szakértő', threshold: 80 },
  { name: 'Vizsga-Mágus', threshold: 100 },
];

const UserLevel = ({ learned }) => {
  const getLevelInfo = (learned) => {
    let currentLevel = levels[0];
    let nextLevel = levels[1];
    for (let i = 0; i < levels.length; i++) {
      if (learned >= levels[i].threshold) {
        currentLevel = levels[i];

        if (i + 1 < levels.length) {
          nextLevel = levels[i + 1];
        } else {
          nextLevel = levels[i];
        }
      }
    }

    return { current: currentLevel, next: nextLevel };
  };

  const { current, next } = getLevelInfo(learned);
  const progress =
    ((learned - current.threshold) / (next.threshold - current.threshold)) *
    100;

  return (
    <div className="level-card">
      <h3>Felkészültségi szint</h3>
      <div className="progress-container">
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(var(--primary-color) ${progress}%, #e0e0e0 0)`,
          }}
        />
        <span className="progress-text">{current.name}</span>
      </div>

      <h2 className="level-label">{current.name}</h2>
      <p className="next-level-text">
        Következő szint (<strong>{next.name}</strong>) még{' '}
        <strong>{next.threshold - learned}</strong> kártya.
      </p>
    </div>
  );
};

export default UserLevel;
