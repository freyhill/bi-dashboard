import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {
  const [lineData, setLineData] = useState([5, 20, 36, 10, 10, 20]);
  useEffect(() => {
    // setInterval(() => {
    //   const lineData2 = lineData.slice();
    //   const result = lineData2.map((item) => {
    //     return item + Math.floor(Math.random() * 10);
    //   });
    //   setLineData(result);
    // }, 3000);
  }, [lineData]);
  const barOptions = {
    tooltip: {
      textStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
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
        name: '销量',
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
                color: '#fec507', // 渐变色起点
              },
              {
                offset: 1,
                color: '#feb146', // 渐变色终点
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
