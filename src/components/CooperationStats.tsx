import React from 'react';
import { Pie } from '@ant-design/charts';

const CooperationStats: React.FC = () => {
  const data = [
    { type: '15号线', value: 3 },
    { type: '8号线', value: 2 },
    { type: '10号线', value: 1 },
  ];

  const config = {
    height: 270,
    width: 400,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }: { percent: number }) =>
        `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '合作方统计',
      },
    },
  };

  return <Pie {...config} />;
};

export default CooperationStats;
