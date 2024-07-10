import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import NumberScroller from './NumberScroller';

const TransactionTable: React.FC = () => {
  const cellStyle = 'pt-2 pb-2 flex-1 flex justify-center text-left';
  const cellStyle2 = clsx(cellStyle, 'text-[12px]');
  const cellStyle1 = clsx(
    cellStyle,
    'text-[#daaa3a]',
    'font-bold',
    'text-[36px]',
  );

  const [num, setNum] = useState(124245);
  const [num1, setNum1] = useState(num); // 使用 useState 来管理 num1

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newNum = num + Math.random() * 3;
      setNum(newNum); // 更新 num
    }, 1000);

    return () => {
      clearInterval(intervalId); // 清除定时器
    };
  }, [num]);

  return (
    <div className="transaction-table">
      <div className="flex">
        <div className={cellStyle2}>运行设备</div>
        <div className={cellStyle2}>实时客流</div>
        <div className={cellStyle2}>实时金额</div>
      </div>

      <div className="flex">
        <div className={cellStyle1}>
          <NumberScroller
            start={num1}
            end={num}
            interval={2000}
            animationDuration={1000}
          />
        </div>
        <div className={cellStyle1}>{200}</div>
        <div className={cellStyle1}>{300}</div>
      </div>
    </div>
  );
};

export default TransactionTable;
