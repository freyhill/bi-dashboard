import React, { useEffect, useState, useRef } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import DeviceTypeChart from './DeviceTypeChart';
import LoanAmountChart from './LoanAmountChart';
import OverviewData from './OverviewData';
import MapChart from './MapChart';
import CustomerStats from './CustomerStats';
import ProductStats from './ProductStats';
import DemoScatter from './Scatter';
import CooperationStats from './CooperationStats';
import RealTimeTransactions from './RealTimeTransactions';
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

const dataList = [
  { name: '北京', value: 2000 },
  { name: '福建', value: 4000 },
];

const Dashboard: React.FC = () => {
  const elementRef = useRef(null); // 创建一个 ref 来引用元素

  return (
    <Bg filterOpacity={0.6}>
      <div className=" h-[100vh] flex flex-col">
        <MyCard title="">
          <div id="header" className="header relative  p-2 bg-opacity-85 flex">
            <div className="flex-1">
              <Time />
            </div>
            <div className="text-cyan-50">Administrator</div>
            <div className="absolute left-0 right-0 m-auto flex flex-1 items-center justify-center text-cyan-50">
              <img src="/xian- subway.jpg" className="w-4 h-4 mr-1" />
              西安地铁数据监控大屏
            </div>
          </div>
        </MyCard>
        <div className="main flex items-center flex-1">
          <div className="flex flex-1 pl-1 pr-1">
            <div
              ref={elementRef}
              className="w-[25%] overflow-hidden p-1 left-side"
            >
              <div className="mb-2">
                <MyCard title="近七日地铁人流量" titleSize="14px">
                  <Bar />
                </MyCard>
              </div>
              <MyCard title="乘客留存" titleSize="16px">
                {/*<CustomerStats />*/}
                <Line />
              </MyCard>
            </div>
            <div className="w-[50%] p-1 overflow-hidden">
              <div className="mb-2">
                <MyCard title="地铁运行全景图" titleSize="14px">
                  {/* <MapChart data={dataList} /> */}
                  <Map />
                </MyCard>
              </div>
              <div className="flex">
                <div className="mr-2 flex-1 ">
                  <MyCard title="实际数据" titleSize="14px">
                    <Pie />
                  </MyCard>
                </div>
                <div className="flex-1 ">
                  <MyCard title="实际数据" titleSize="14px">
                    <Pie />
                  </MyCard>
                </div>
              </div>
            </div>
            <div className="w-[30%]  p-1 overflow-hidden">
              <div className="mb-2 overflow-hidden">
                <MyCard title="地铁数据总览" titleSize="14px">
                  {/* <OverviewData /> */}
                  <Stats />
                </MyCard>
              </div>
              <div className="mb-2">
                <MyCard title="线路故障占比">
                  <Griaddent />
                </MyCard>
              </div>
              <MyCard title="单个列车实时数据" titleSize="14px">
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
