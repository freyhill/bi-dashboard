import React from 'react';
import ReactECharts from 'echarts-for-react';

const Dashboard: React.FC = () => {
  const bgColor = '#001f3f'; // 漂亮的蓝色背景

  // 柱状图配置
  const barOptions = {
    backgroundColor: bgColor,
    title: {
      text: '柱状图示例',
      textStyle: {
        color: '#ffffff',
      },
    },
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
        color: '#ffffff',
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#ffffff',
      },
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
          color: '#3b82f6', // 柱状图颜色
        },
      },
    ],
  };

  // 曲线图配置
  const lineOptions = {
    backgroundColor: bgColor,
    title: {
      text: '曲线图示例',
      textStyle: {
        color: '#ffffff',
      },
    },
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
        color: '#ffffff',
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
        color: '#ffffff',
      },
    },
    series: [
      {
        name: '销量',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
        itemStyle: {
          color: '#3b82f6', // 曲线图颜色
        },
        lineStyle: {
          color: '#3b82f6', // 曲线颜色
        },
      },
    ],
  };

  // 饼状图配置
  const pieOptions = {
    backgroundColor: bgColor,
    title: {
      text: '饼状图示例',
      left: 'center',
      textStyle: {
        color: '#ffffff',
      },
    },
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

  // 漏斗图配置
  const funnelOptions = {
    backgroundColor: bgColor,
    title: {
      text: '漏斗图示例',
      left: 'center',
      textStyle: {
        color: '#ffffff',
      },
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#ffffff',
      },
    },
    series: [
      {
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          color: '#ffffff',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: '#ffffff',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        data: [
          { value: 60, name: '访问' },
          { value: 40, name: '咨询' },
          { value: 20, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' },
        ],
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ReactECharts option={barOptions} style={{ height: '400px' }} />
      <ReactECharts option={lineOptions} style={{ height: '400px' }} />
      <ReactECharts option={pieOptions} style={{ height: '400px' }} />
      <ReactECharts option={funnelOptions} style={{ height: '400px' }} />
    </div>
  );
};

export default Dashboard;
