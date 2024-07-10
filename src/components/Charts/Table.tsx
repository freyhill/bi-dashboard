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
    username: '苏先生',
    time: '2019-09-16',
    operation: '贷款',
    amount: '¥ 0.00',
    product: '测试产品签约',
  },
  {
    username: '范先生',
    time: '2019-09-16',
    operation: '贷款',
    amount: '¥ 85,000.00',
    product: '测试产品签约',
  },
  {
    username: '张先生',
    time: '2019-09-16',
    operation: '贷款',
    amount: '¥ 44,000.00',
    product: '测试产品签约',
  },
  {
    username: '钱先生',
    time: '2019-09-16',
    operation: '贷款',
    amount: '¥ 63,000.00',
    product: '测试产品签约',
  },
  {
    username: '刘先生',
    time: '2019-09-16',
    operation: '贷款',
    amount: '¥ 18,000.00',
    product: '测试产品签约',
  },
];

const TransactionTable: React.FC = () => {
  const cellStyle = 'pt-2 pb-2 flex-1 mr-8 text-left';
  const cellStyle2 = 'pt-2 pb-2  mr-8 text-left';
  return (
    <div className="transaction-table">
      <div className="row text-sm font-bold  border-b border-b-[#304c60] flex text-cyan-500">
        <div className={cellStyle}>用户名</div>
        <div className={cellStyle}>时间</div>
        <div className={cellStyle}>操作</div>
        <div className={cellStyle}>金额</div>
      </div>
      {transactions.map((transaction, index) => (
        <div
          className="row border-b border-b-[#304c60] text-sm flex"
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
