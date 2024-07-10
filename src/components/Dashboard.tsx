import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import DeviceTypeChart from './DeviceTypeChart';
import LoanAmountChart from './LoanAmountChart';
import MapChart from './MapChart';
import CustomerStats from './CustomerStats';
import ProductStats from './ProductStats';
import CooperationStats from './CooperationStats';
import RealTimeTransactions from './RealTimeTransactions';

const { Header, Content } = Layout;
const dataList = [{"name":"北京","value":2000},{"name":"福建","value":4000}];
const Dashboard: React.FC = () => {
  return (
    <Layout style={{ height: '100vh', background:'transparent' }}>
     
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card title="设备类型" style={{ backgroundColor: '', color: 'white' }}>
              <DeviceTypeChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="当前累计贷款金额" style={{ backgroundColor: '', color: 'white' }}>
              <MapChart data={dataList}/>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Top 10城市贷款金额" style={{ backgroundColor: '', color: 'white' }}>
              <LoanAmountChart />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
          <Col span={6}>
            <Card title="客户统计" style={{ backgroundColor: '', color: 'white' }}>
              <CustomerStats />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="产品统计" style={{ backgroundColor: '', color: 'white' }}>
              <ProductStats />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="合作方统计" style={{ backgroundColor: '', color: 'white' }}>
              <CooperationStats />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="线路实时数据" style={{ backgroundColor: '', color: 'white' }}>
              <RealTimeTransactions />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;