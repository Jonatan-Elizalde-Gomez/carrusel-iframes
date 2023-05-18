import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export function uploadFile(formData: FormData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/files/upload`, formData)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo:', error);
        reject(new Error('Ocurrió un error al cargar el archivo.'));
      });
  });
}


export function listFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
        axios
          .get(`${BASE_URL}/files/upload/list`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            console.error('Error al obtener los datos:', error);
            reject(new Error('Ocurrió un error al obtener los datos.'));
        });
    });
  }