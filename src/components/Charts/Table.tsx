import React from 'react';

interface Transaction {
  username: string;
  time: string;
  operation: string;
  amount: string;
  product: string;
}

const transactions: Transaction[] = [
  {
    username: '完整性',
    time: '18',
    operation: '3245',
    amount: '2',
    product: '测试产品签约',
  },
  {
    username: '一致性',
    time: '16',
    operation: '2682',
    amount: '3',
    product: '测试产品签约',
  },
  {
    username: '相关性',
    time: '20',
    operation: '1678',
    amount: '6',
    product: '测试产品签约',
  },
  {
    username: '准确性',
    time: '30',
    operation: '2234',
    amount: '8',
    product: '测试产品签约',
  },
  {
    username: '及时性',
    time: '25',
    operation: '1235',
    amount: '8',
    product: '测试产品签约',
  },
  {
    username: '唯一性',
    time: '31',
    operation: '1235',
    amount: '4',
    product: '测试产品签约',
  },
  {
    username: '时效性',
    time: '20',
    operation: '1235',
    amount: '2',
    product: '测试产品签约',
  },
];

const TransactionTable: React.FC = () => {
  const cellStyle = 'pt-2 pb-2 flex-1 mr-8 text-left';
  const cellStyle2 = 'pt-2 pb-2  mr-8 text-left';
  return (
    <div className="transaction-table">
      <div className="row text-sm font-bold  border-b border-b-[#304c60] flex text-cyan-500">
        <div className={cellStyle}>检查类型</div>
        <div className={cellStyle}>规划个数</div>
        <div className={cellStyle}>检查条数</div>
        <div className={cellStyle}>异常条数</div>
      </div>
      {transactions.map((transaction, index) => (
        <div
          className="row py-1 border-b border-b-[#304c60] text-sm flex"
          key={index}
        >
          <div className={cellStyle}>{transaction.username}</div>
          <div className={cellStyle}>{transaction.time}</div>
          <div className={cellStyle}>{transaction.operation}</div>
          <div className={cellStyle}>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionTable;
