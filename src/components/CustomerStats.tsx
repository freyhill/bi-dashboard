import React from 'react';
import { Funnel } from '@ant-design/charts';

const CustomerStats: React.FC = () => {
  const data = [
    { stage: '注册用户', count: 100 },
    { stage: '一次使用', count: 92 },
    { stage: '长期使用', count: 60 },
  ];

  const config = {
    height: 352,
    data,
    xField: 'stage',
    yField: 'count',
    shape: 'funnel',
    label: {
      position: 'middle',
      offset: 0,
      style: {
        fill: '#fff',
        fontSize: 12,
      },
    },
  };

  return <Funnel {...config} />;
};

export default CustomerStats;
