import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {
  const [lineData, setLineData] = useState([200, 212, 214, 217, 218, 230, 237]);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
  const barOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      data: ['7/6', '7/7', '7/8', '7/9', '7/10', '7/11', '7/12'],
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#ddd',
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#f27099',
      },
    },
    series: [
      {
        name: '增量',
        type: 'bar',
        barWidth: '50%', // 调整柱子的宽度
        data: lineData,
        itemStyle: {
          borderRadius: [20, 20, 20, 20], // 圆角设置
          shadowColor: 'rgba(0, 0, 0, 0.3)', // 阴影颜色
          shadowBlur: 20, // 阴影模糊度
          shadowOffsetX: 2, // 阴影水平偏移
          shadowOffsetY: 2, // 阴影垂直偏移
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#FCCF31', // 渐变色起点
              },
              {
                offset: 1,
                color: '#F55555', // 渐变色终点
              },
            ],
          },
        },
        emphasis: {
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)', // 强调状态下的阴影颜色
            shadowBlur: 15, // 强调状态下的阴影模糊度
          },
        },
      },
    ],
  };

  return <ReactECharts option={barOptions} style={{ height: '400px' }} />;
};

export default BarChart;
