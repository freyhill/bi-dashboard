import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  titleSize?: string;
  titleColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title = '111',
  titleSize,
  titleColor,
  backgroundColor,
  children,
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor || 'rgba(40,50,61,0.4)',
  };

  const titleStyle = {
    fontSize: titleSize || '12px',
    color: titleColor || 'rgb(102,209,194,255)',
  };

  return (
    <div className={clsx(styles.cardContainer)}>
      <div className={clsx(styles.cardBg)} style={cardStyle}></div>
      <div className={clsx(styles.cardContent)}>
        {title ? (
          <h4
            className={clsx(
              'pl-4 pt-4 pr-4',
              'title-with-before',
              'font-medium',
              'text-white',
              'text-lg',
            )}
            style={titleStyle}
          >
            {title}
          </h4>
        ) : null}
        <div
          className={clsx(
            'pl-4 pr-4 pb-4',
            'rounded-md',
            'overflow-hidden',
            'text-lg',
            'text-white',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
