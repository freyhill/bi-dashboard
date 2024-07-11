import React from 'react';
import ReactECharts from 'echarts-for-react';
type dataitemProps = {
  value: number;
  name: string;
};
interface PieProps {
  data: dataitemProps[];
  pieColor: string[];
}
const Pie: React.FC<PieProps> = ({ data, pieColor }) => {
  const options = {
    title: {
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        color: '#aaa', // 图例字体颜色
      },
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data,
        itemStyle: {
          // 设置每个块的背景色
          normal: {
            color: (params: any) => {
              const colorList = pieColor;
              return colorList[params.dataIndex % colorList.length];
            },
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  // 饼状图配置
  const pieOptions = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#ffffff',
      },
      formatter: '{a} <br/>{b}: {c} ({d}%)', // 显示数据
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        itemStyle: {
          // 设置每个块的背景色
          normal: {
            color: (params: any) => {
              const colorList = pieColor;
              return colorList[params.dataIndex % colorList.length];
            },
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
      <ReactECharts option={options} style={{ height: '250px' }} />
    </div>
  );
};

export default Pie;
