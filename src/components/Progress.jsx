import { useEffect, useState } from 'react';

export default function Progress({ data, setPercentageBar }) {
  const [percentageValue, setPercentageValue] = useState(0);
  const { currentLevel, maxLevel } = data;

  useEffect(() => {
    const getPercentage = () => {
      const percentage = Math.ceil((currentLevel / maxLevel) * 100);
      setPercentageValue(percentage);
      setPercentageBar(percentage);
    };

    getPercentage();
  }, [currentLevel, maxLevel, setPercentageBar]);

  return (
    <div className="range" style={{ '--p': `${percentageValue}` }}>
      <div className="range__label"></div>
    </div>
  );
}
