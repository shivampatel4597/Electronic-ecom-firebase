import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_WWX6zFDEYWLFegqJJoZNCyeoAqRGjz4",
  authDomain: "electrinics-site.firebaseapp.com",
  projectId: "electrinics-site",
  storageBucket: "electrinics-site.appspot.com",
  messagingSenderId: "774287978265",
  appId: "1:774287978265:web:b2395e8c1bc8b496e9df88",
};

const app = initializeApp(firebaseConfig);

export { app };
