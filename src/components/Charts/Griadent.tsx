import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
const Pie: React.FC = () => {
  const [datas, setDatas] = useState([320, 132, 201, 334, 190, 130, 220]);

  useEffect(() => {}, []);
  // 饼状图配置
  const option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['8号线', '10号线', '15号线'],
      textStyle: {
        color: '#aaa', // 图例字体颜色
      },
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['7.5', '7.6', '7.8', '7.9', '7.10', '7.11', '7.12'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '8号线',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#52E5E7',
            },
            {
              offset: 1,
              color: '#130CB7',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: '10号线',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#43CBFF',
            },
            {
              offset: 1,
              color: '#9708CC',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: '15号线',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#FCCF31',
            },
            {
              offset: 1,
              color: '#F55555',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: datas,
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ReactECharts option={option} style={{ height: '250px' }} />
    </div>
  );
};

export default Pie;
