import React from 'react';
import ReactECharts from 'echarts-for-react';

const Pie: React.FC = () => {
  // 饼状图配置
  const pieOptions = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#ffffff',
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          color: '#ffffff',
        },
        labelLine: {
          lineStyle: {
            color: '#ffffff',
          },
        },
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ReactECharts option={pieOptions} style={{ height: '250px' }} />
    </div>
  );
};

export default Pie;
