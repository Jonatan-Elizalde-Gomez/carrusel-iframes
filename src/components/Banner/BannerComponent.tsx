import React from "react";
const BannerComponent: React.FC = () => {
  return (
    <div className="container banner-container">
      <div className="row">
        <div className="col-md-6">
          <iframe
            width="100%"
            height="259"
            src="https://www.youtube.com/embed/ptCrUZwRwJQ"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-6">
          <h2 className="game-title">Deal of the Dead Director's Cut</h2>
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid game-image"
                src="https://img.itch.zone/aW1hZ2UvNjQ0NjAzLzM3Mzc2NTQucG5n/347x500/Silbcv.png"
                alt="Imagen 1"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid game-image"
                src="https://img.itch.zone/aW1hZ2UvNjQ0NjAzLzM3Mzc2NTUucG5n/347x500/PMUGe7.png"
                alt="Imagen 2"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid game-image"
                src="https://img.itch.zone/aW1hZ2UvNjQ0NjAzLzM3Mzc2NTYucG5n/347x500/p0c59b.png"
                alt="Imagen 3"
              />
            </div>
          </div>
          <button className="btn btn-outline-primary rounded-pill mt-3 game-button">
            Get the game
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default BannerComponent;
