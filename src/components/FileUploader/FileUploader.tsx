import  { useState } from 'react';
import { uploadFile } from '../Services/FilesService';

const FileUploadComponent = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('htmlFile', selectedFile);

      uploadFile(formData)
        .then((response) => {
          console.log(response);
          // Lógica adicional después de la solicitud POST exitosa
        })
        .catch((error) => {
          console.error(error);
          // Manejo de errores
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
