import React, { useState } from 'react';

interface SliderProps {
  iframeUrls: string[];
}

const Slider: React.FC<SliderProps> = ({ iframeUrls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % iframeUrls.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + iframeUrls.length) % iframeUrls.length);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {iframeUrls.map((url, index) => (
                <div className={`carousel-item ${index === currentSlide ? 'active' : ''}`} key={index}>
                  <iframe src={url} width="500" height="500" title="Slider Item" className="d-block w-100" />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={previousSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
