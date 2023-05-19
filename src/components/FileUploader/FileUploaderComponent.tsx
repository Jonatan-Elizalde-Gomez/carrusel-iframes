import { useRef, useState } from "react";
import { uploadFile } from "../Services/FilesService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from 'react-dropzone';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const { getRootProps, getInputProps, isDragActive, isDragAccept} = useDropzone({
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });


  
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("htmlFile", selectedFile);

      uploadFile(formData)
        .then((response) => {
          console.log(response);
          toast.success("Archivo subido exitosamente");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error al subir el archivo");
        });
    }
  };

  return (
    <div className="container file-uploader__container">
      <ToastContainer />
      <div
        {...getRootProps()}
        className="file-uploader__input"
      >
        <input {...getInputProps()} />
        {selectedFile ? (
          <>
          <p>File selected: {selectedFile?.name}</p>
          <button className="btn btn-primary file-uploader__button">Browse Files</button>
          </>
        ) : (
          <>
            <p>Drag &amp; Drop files here</p>
            <p>or</p>
            <button className="btn btn-primary file-uploader__button">Browse Files</button>
          </>
        )}
      </div>
      <button
        className="btn btn-primary file-uploader__button"
        onClick={handleUpload}
      >
        Upload File
      </button>
    </div>
  );
};


export default FileUploadComponent;
