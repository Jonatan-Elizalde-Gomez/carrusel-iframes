import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerComponent from "./components/Banner/BannerComponent";
import FileUploader from "./components/FileUploader/FileUploaderComponent";
import GridComponent from "./components/Grid/GridComponent";
import GridItemComponent from "./components/Grid/GridItemcomponent";

const CarouselApp: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid-item/:link" element={<GridItemComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-center">Videojuegos Diarios</h1>
      <BannerComponent />
      <FileUploader />
      <GridComponent />
    </div>
  );
};

export default CarouselApp;
