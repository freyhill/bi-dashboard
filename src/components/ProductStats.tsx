import React from 'react';
import { Pie } from '@ant-design/charts';

const ProductStats: React.FC = () => {
  const data = [
    { type: '在库分期', value: 24913 },
    { type: '工薪', value: 23908 },
    { type: '教育分期', value: 15000 },
    { type: '3C消费分期', value: 12000 },
    { type: '旅游分期', value: 8000 },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }: { percent: number }) => `${(percent * 100).toFixed(0)}%`,
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
        content: '产品统计',
      },
    },
  };

  return <Pie {...config} />;
};

export default ProductStats;