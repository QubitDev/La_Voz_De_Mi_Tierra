import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi0bsJ64ex5AXCGdHtsqwDJJaxtSd3qsY",
  authDomain: "qubit-9a4a6.firebaseapp.com",
  projectId: "qubit-9a4a6",
  storageBucket: "qubit-9a4a6.appspot.com",
  messagingSenderId: "74114126448",
  appId: "1:74114126448:web:cf2ac4ef9388cd8c699ab5"
};
/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCph5kr75PvtolotkpfB8wW1QpAFTaZqZQ",
  authDomain: "qubit-angular-firebase.firebaseapp.com",
  projectId: "qubit-angular-firebase",
  storageBucket: "qubit-angular-firebase.appspot.com",
  messagingSenderId: "359055005446",
  appId: "1:359055005446:web:bb253d8cf3a18c3ca83087",
  measurementId: "G-NPTWN6JG0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 * 
 */

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

