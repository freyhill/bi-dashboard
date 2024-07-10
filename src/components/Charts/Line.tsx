import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart: React.FC = () => {
  // 曲线图配置
  const lineOptions = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#8c7eeb',
      },
    },
    series: [
      {
        name: '销量',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
        itemStyle: {
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
                color: '#fec507', // 渐变色起点
              },
              {
                offset: 1,
                color: '#feb146', // 渐变色终点
              },
            ],
          },
        },
        lineStyle: {
          color: '#3b82f6', // 曲线颜色
        },
      },
    ],
  };

  return <ReactECharts option={lineOptions} style={{ height: '350px' }} />;
};

export default LineChart;
