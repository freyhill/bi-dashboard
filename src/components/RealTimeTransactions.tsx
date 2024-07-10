import React from 'react';
import { Table } from 'antd';

const RealTimeTransactions: React.FC = () => {
  const columns = [
    {
      title: '线路',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: '人流量',
      dataIndex: 'visitors',
      key: 'visitors',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const data = [
    {
      key: 1,
      path: '8号线',
      visitors: '301234',
      amount: '¥6,423,931',
      product: '测试产品A',
    },
    {
      key: 2,
      path: '10号线',
      visitors: '562312',
      amount: '¥¥9,431,946',
      product: '测试产品B',
    },
    {
      key: 3,
      path: '15号线',
      visitors: '301234',
      amount: '¥7,453,987',
      product: '测试产品C',
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default RealTimeTransactions;
