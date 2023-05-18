import React from 'react';
import BannerComponent from './components/Banner/Banner';
import FileUploader from './components/FileUploader/FileUploader';
import Grid from './components/Grid/Grid';
import FileUploadComponent from './components/FileUploader/FileUploader';

const App: React.FC = () => {

  
  return (
  <div>
  <h1>Slider Demo</h1>
  <BannerComponent />
  <FileUploader/>
  <Grid />
  </div>
  );
  };
  
  export default App;
