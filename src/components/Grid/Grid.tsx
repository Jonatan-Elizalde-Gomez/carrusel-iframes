import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { listFiles } from '../Services/FilesService';

const GridComponent: React.FC = () => {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {

    listFiles()
    .then((response) => {
      setLinks(response.archivos);
      console.log(response.archivos);
      // Lógica adicional después de la solicitud POST exitosa
    })
    .catch((error) => {
      console.error(error);
      // Manejo de errores
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {links.map((link, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
            <iframe src={`http://127.0.0.1:3000/uploads/${link}`} title={`iframe-${index}`} width="150px" height="150px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
