import React from "react";
import { useParams } from "react-router-dom";

const GridItemComponent: React.FC = () => {
  const { link } = useParams();

  return (
    <div className="container grid-item__container">
      <h1 className="text-center grid-item__title">Videojuego</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="grid-item__iframe embed-responsive-item"
          src={`http://127.0.0.1:3000/uploads/${link}`}
          title="Videojuego"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default GridItemComponent;
