import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // 每秒更新一次

    // 在组件卸载时清除定时器
    return () => clearInterval(interval);
  }, []);

  // 格式化日期和时间
  const formattedDateTime = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      weekday: 'long',
    };
    return currentDateTime.toLocaleString('zh-CN', options);
  };

  return (
    <div>
      <p className="text-cyan-50">{formattedDateTime()}</p>
    </div>
  );
};

export default Time;
