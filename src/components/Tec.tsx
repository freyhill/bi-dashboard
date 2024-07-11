import React from 'react';
import './Tec.css';

const TechCircuit: React.FC = () => {
  return (
    <div className="tech-circuit-container">
      <svg
        width="800"
        height="40"
        viewBox="0 0 800 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tech-circuit"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#1e90ff', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#00bfff', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="10" className="tech-circuit-circle" />
        <line x1="30" y1="20" x2="770" y2="20" className="tech-circuit-line" />
        <circle cx="780" cy="20" r="10" className="tech-circuit-circle" />
        {/* 你可以添加更多的圆圈和线条 */}
      </svg>
    </div>
  );
};

export default TechCircuit;
