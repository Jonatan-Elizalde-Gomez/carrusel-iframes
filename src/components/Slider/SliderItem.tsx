import React from 'react';

interface SliderItemProps {
  url: string;
  isActive: boolean;
}

const SliderItem: React.FC<SliderItemProps> = ({ url, isActive }) => {
  return (
    <div className={`slider-item ${isActive ? 'active' : ''}`}>
      <iframe src={url} width="500" height="500" title="Slider Item" />
    </div>
  );
};

export default SliderItem;
