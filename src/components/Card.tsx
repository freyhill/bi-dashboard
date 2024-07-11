import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  titleSize?: string;
  titleColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  icon: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title = '111',
  titleSize,
  titleColor,
  backgroundColor,
  children,
  icon,
  className,
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor || 'rgba(40,50,61,0.4)',
  };

  const titleStyle = {
    fontSize: titleSize || '12px',
    color: titleColor || 'rgb(102,209,194,255)',
  };

  return (
    <div
      className={clsx('relative', 'overflow-hidden', 'rounded-md', className)}
    >
      <div
        className="absolute left-0 top-0 w-[100%] h-[100%]"
        style={cardStyle}
      ></div>
      <div className="relative z-2 bg-transparent px-4 py-2">
        {title ? (
          <h4
            className={clsx(
              !icon && 'title-with-before',
              'font-medium',
              'text-white',
              'text-lg',
              'items-center',
              'flex',
              className,
            )}
            style={titleStyle}
          >
            <i
              style={{ color: 'red' }}
              className={clsx('iconfont', 'mr-1', 'text-green-500', icon)}
            ></i>
            {title}
          </h4>
        ) : null}
        <div className={clsx('overflow-hidden', 'text-gray-300')}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
