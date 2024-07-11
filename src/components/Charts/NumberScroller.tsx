import React, { useEffect, useState } from 'react';

interface RandomNumberProps {
  number: number;
  duration: number;
  color: string;
}

const RandomNumber: React.FC<RandomNumberProps> = ({
  number,
  duration,
  color,
}) => {
  const [currentNumber, setCurrentNumber] = useState(number);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) =>
        getRandomNumberWithSameDigits(prevNumber),
      );
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  const getRandomNumberWithSameDigits = (num: number): number => {
    const numStr = num.toString();
    const numLength = numStr.length;
    const randomDigit = Math.floor(Math.random() * 10);
    const randomPosition = Math.floor(Math.random() * numLength);

    const newNumStr = numStr
      .split('')
      .map((digit, idx) => (idx === randomPosition ? randomDigit : digit))
      .join('');

    return parseInt(newNumStr, 10);
  };

  return (
    <div>
      <h1 className={color}>{currentNumber}</h1>
    </div>
  );
};

export default RandomNumber;
