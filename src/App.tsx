import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard2';
import './index.css';
import './App.css';
import Dashboard2 from './components/Charts/Index';
const App: React.FC = () => {
  const handleFullScreen = () => {
    const element = document.documentElement; // 整个页面
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <>
      <button
        style={{ display: 'none' }}
        className="absolute left-0 top-0 z-10"
        onClick={handleFullScreen}
      >
        全屏
      </button>
      <Dashboard />
    </>
  );
};

export default App;
