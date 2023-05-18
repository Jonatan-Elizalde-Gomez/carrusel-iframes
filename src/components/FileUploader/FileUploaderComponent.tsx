import { useState } from "react";
import { uploadFile } from "../Services/FilesService";

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("htmlFile", selectedFile);

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
    <div className="container file-uploader__container">
      <div className="file-uploader__input">
      <input
        type="file" 
        accept=".html" 
        className="form-control" 
        placeholder="Files" 
        aria-label="Files" 
        aria-describedby="addon-wrapping" 
        onChange={handleFileChange}
        required/>
          </div>
        <button 
          className="input-group-text file-uploader__button" 
          id="addon-wrapping"
          onClick={handleUpload}
        >
          Subir archivo
        </button>
    </div>
  );
}
export default FileUploadComponent;
