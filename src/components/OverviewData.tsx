import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const OverviewData: React.FC = () => {
  const formatter = (value: any) => {
    return Math.floor(value);
  };
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Statistic
          valueStyle={{ fontSize: '14px', color: 'red' }}
          formatter={formatter}
          title="运行设备"
          value={65}
        />
      </Col>
      <Col span={8}>
        <Statistic
          valueStyle={{ fontSize: '14px' }}
          title="实时客流"
          formatter={formatter}
          value={4320932}
          precision={2}
        />
      </Col>
      <Col span={8}>
        <Statistic
          formatter={formatter}
          valueStyle={{ fontSize: '14px' }}
          title="实时金额"
          value={100203022}
          precision={2}
        />
      </Col>
    </Row>
  );
};

export default OverviewData;
