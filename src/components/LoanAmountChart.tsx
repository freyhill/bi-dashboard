import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    height: 206,
    width: 586,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/indices.json',
    },
    xField: (d) => new Date(d.Date),
    yField: 'Close',
    colorField: 'Symbol',
    normalize: { basis: 'first', groupBy: 'color' },
    scale: {
      y: { type: 'log' },
    },
    axis: {
      y: { title: '↑ Change in price (%)' },
    },
    label: {
      text: 'Symbol',
      selector: 'last',
      style: {
        fontSize: 10,
      },
    },
    tooltip: { channel: 'y', valueFormatter: '.1f' },
  };
  return <Line {...config} />;
};

export default DemoLine;
