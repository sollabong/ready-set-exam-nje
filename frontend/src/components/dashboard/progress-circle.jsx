const ProgressCircle = ({ percent, color }) => {
  const getProgressStyle = (percent, color) => ({
    background: `conic-gradient(${color} ${percent}%, #e0e0e0 0)`,
  });

  return (
    <div className="progress-container">
      <div
        className="progress-circle"
        style={getProgressStyle(percent, color)}
      />
      <span className="progress-text">{Math.round(percent)}%</span>
    </div>
  );
};

export default ProgressCircle;
