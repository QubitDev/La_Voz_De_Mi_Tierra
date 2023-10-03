import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi0bsJ64ex5AXCGdHtsqwDJJaxtSd3qsY",
  authDomain: "qubit-9a4a6.firebaseapp.com",
  projectId: "qubit-9a4a6",
  storageBucket: "qubit-9a4a6.appspot.com",
  messagingSenderId: "74114126448",
  appId: "1:74114126448:web:cf2ac4ef9388cd8c699ab5"
};

const app = initializeApp(firebaseConfig);

const database = firebase.database();

let audio = {
  id_Audio: "ID_DEL_AUDIO",
  titulo_audio: "TITULO_DEL_AUDIO",
  musica_fondo: "MUSICA_DE_FONDO",
  procedencia: "PROCEDENCIA",
  formato_audio: "FORMATO_DEL_AUDIO",
  tipo_audio: "TIPO_DEL_AUDIO",
  narrado: "NARRADO_POR",
  duracion: "DURACION_DEL_AUDIO",
  archivo_audio: "URL_DEL_ARCHIVO_DE_AUDIO",
  archivo_texto: "URL_DEL_ARCHIVO_DE_TEXTO"
};

database.ref("audios").push(audio, function(error) {
  if (error) {
    console.error("Error al agregar datos:", error);
  } else {
    console.log("Datos agregados correctamente");
  }
});

const storage = getStorage(app);

// Function to upload files
function uploadFile(files) {
  try {
    files.forEach(async (file) => {
      const storageRef = ref(storage, `your-desired-path/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);

      console.log("File uploaded:", file.name);


      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);
    });
  } catch (error) {
    console.error("Error uploading files:", error);
  }
}

const files = [/* your files here */];
uploadFile(files);
