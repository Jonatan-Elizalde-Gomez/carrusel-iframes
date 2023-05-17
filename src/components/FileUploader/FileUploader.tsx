import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('htmlFile', selectedFile);

      axios
        .post('http://localhost:3000/api/files/upload', formData)
        .then((response) => {
          // Lógica adicional después de la solicitud POST exitosa
          console.log(response.data);
        })
        .catch((error) => {
          // Manejo de errores
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept=".html" onChange={handleFileChange} required />
      <button onClick={handleUpload}>Subir Archivo</button>
    </div>
  );
};

export default FileUploadComponent;
