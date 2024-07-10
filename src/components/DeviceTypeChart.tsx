import { DualAxes } from '@ant-design/plots';
import React from 'react';

import { Column } from '@ant-design/plots';

const data = [
  { type: '6/29', value: 3993234 },
  { type: '6/30', value: 3693234 },
  { type: '7/1', value: 4693234 },
  { type: '7/2', value: 4593234 },
  { type: '7/3', value: 4393234 },
  { type: '7/4', value: 4293234 },
  { type: '7/5', value: 4120000 },
];

const DemoColumn = () => {
  const config = {
    height: 300,
    data,
    xField: 'type',
    yField: 'value',
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
    style: {
      fill: ({ type }) => {
        if (type === '10-30分' || type === '30+分') {
          return '#22CBCC';
        }
        return '#2989FF';
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
        return '';
      },
      offset: 10,
    },
    legend: false,
  };
  return <Column {...config} />;
};

export default DemoColumn;
