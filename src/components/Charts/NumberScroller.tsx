import React, { useEffect, useRef, useState } from 'react';

interface NumberScrollerProps {
  start: number;
  end: number;
  interval: number; // 每隔多长时间更新一次（毫秒）
  animationDuration: number; // 动画持续时间（毫秒）
}

const NumberScroller: React.FC<NumberScrollerProps> = ({
  start,
  end,
  interval,
  animationDuration,
}) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const currentNumberRef = useRef(start);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const difference = end - start;
    const step = difference / (animationDuration / interval);

    intervalRef.current = setInterval(() => {
      startTimeRef.current = Date.now();

      const update = () => {
        const now = Date.now();
        const elapsedTime = now - startTimeRef.current!;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        setCurrentNumber(Math.round(start + difference * progress));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [start, end, interval, animationDuration]);

  return <div className="number-scroller">{currentNumber}</div>;
};

export default NumberScroller;
