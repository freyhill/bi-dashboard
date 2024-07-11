import React from 'react';
import clsx from 'clsx';

interface BackGroundProps {
  background?: string;
  filterColor?: string;
  filterOpacity?: number;
  children: React.ReactNode;
}

const BackGround: React.FC<BackGroundProps> = ({
  background,
  filterColor,
  filterOpacity,
  children,
}) => {
  let bgStyle: React.CSSProperties = {};
  const imageRegex = /\.(jpg|jpeg|png)$/i;

  if (background) {
    if (!imageRegex.test(background)) {
      bgStyle = {
        backgroundColor: background,
      };
    } else {
      bgStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    }
  } else {
    bgStyle = {
      //backgroundColor: 'rgb(75,101,133)',
      backgroundImage: `linear-gradient( 135deg, rgb(75,101,133) 10%, #360940 100%)`,
    };
  }

  const filterStyle: React.CSSProperties = {
    backgroundColor: filterColor ? filterColor : '#000',
    opacity: filterOpacity !== undefined ? filterOpacity : 0.2,
  };

  const defaultCL = 'w-[100%] h-[100vh] absolute left-0 top-0';

  return (
    <div className="w-[100%] h-[100vh] relative" style={bgStyle}>
      <div className={defaultCL} style={filterStyle}></div>
      <div className={defaultCL}>{children}</div>
    </div>
  );
};

export default BackGround;
