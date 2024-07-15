import React, { useEffect, useState, useRef } from 'react';
import MyCard from './Card';
import Bg from './BackGround';
import Bar from './Charts/Bar';
import Time from './Time';
import TableList from './Charts/Table';
import Stats from './Charts/Stats';
import Line from './Charts/Line';
import Pie from './Charts/Pie';
import Griaddent from './Charts/Griadent';
import Map from './Charts/Map';
import Tec from './Tec';
import MapXiAn from './Charts/MapXiAn';
import Radar from './Charts/Radar';
import { pieData1, pieData2, pieColor1, pieColor2 } from '../data/pieData';
const Dashboard: React.FC = () => {
  const elementRef = useRef(null); // 创建一个 ref 来引用元素

  return (
    <Bg filterOpacity={0.6}>
      <div className="h-[100vh] flex flex-col">
        <div className="px-2 py-1">
          <MyCard title="" icon="" className="px-2 py-1">
            <div
              id="header"
              className="header items-center relative  py-3 px-2 bg-opacity-85 flex"
            >
              <div className="flex-1 flex text-sm">
                <i className="iconfont mr-2  icon-shijian"></i>
                <Time />
              </div>
              <div className=" text-cyan-600 text-sm">
                <i className="iconfont mr-2 icon-tianqi"></i>晴
              </div>
              <div className="gradient-text absolute left-0 right-0 m-auto flex flex-1 items-center justify-center text-cyan-50">
                {/* <img src="/xian- subway.jpg" className="w-4 h-4 mr-1" /> */}
                西安地铁数据监控大屏
              </div>
            </div>
          </MyCard>
        </div>
        <div className="main flex items-center flex-1">
          <div className="flex flex-1 pl-1 pr-1">
            <div
              ref={elementRef}
              className="w-[25%] overflow-hidden p-1 left-side"
            >
              <div className="mb-2">
                <MyCard
                  title="近一周数据增量"
                  icon="icon-shuju16"
                  titleSize="14px"
                >
                  <Bar />
                </MyCard>
              </div>
              <MyCard
                title="业务指标数据"
                titleSize="14px"
                icon="icon-shujutu1"
              >
                {/* <Line /> */}
                <Radar />
              </MyCard>
            </div>
            <div className="w-[50%] p-1 overflow-hidden">
              <div className="mb-2">
                <MyCard
                  title="地铁运行全景图"
                  titleSize="14px"
                  icon="icon-huochezhan"
                >
                  {/* <MapChart data={dataList} /> */}
                  <MapXiAn />
                </MyCard>
              </div>
              <div className="flex">
                <div className="mr-2 flex-1 ">
                  <MyCard
                    title="对外数据服务"
                    titleSize="14px"
                    icon="icon-shujutongji1"
                  >
                    <Pie data={pieData1} pieColor={pieColor1} />
                  </MyCard>
                </div>
                <div className="flex-1 ">
                  <MyCard
                    title="数据增量分布"
                    titleSize="14px"
                    icon="icon-shujutongji1"
                  >
                    <Pie data={pieData2} pieColor={pieColor2} />
                  </MyCard>
                </div>
              </div>
            </div>
            <div className="w-[30%]  p-1 overflow-hidden">
              <div className="mb-2 overflow-hidden">
                <MyCard
                  title="业务数据总览"
                  titleSize="14px"
                  icon="icon-shujuzhili"
                >
                  {/* <OverviewData /> */}
                  <Stats />
                </MyCard>
              </div>
              <div className="mb-2">
                <MyCard title="线路故障占比" icon="icon-malfunction2">
                  <Griaddent />
                </MyCard>
              </div>
              <MyCard
                title="数据质量统计"
                titleSize="14px"
                icon="icon-shujutongji2"
              >
                {/* <RealTimeTransactions /> */}
                <TableList />
              </MyCard>
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default Dashboard;
