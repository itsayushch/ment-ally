import { getApps, initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOlEwww7fGkkhplXd3sdpticuM1ecZ6uc",
    authDomain: "dev-dynasty-org.firebaseapp.com",
    projectId: "dev-dynasty-org",
    storageBucket: "dev-dynasty-org.appspot.com",
    messagingSenderId: "740470415311",
    appId: "1:740470415311:web:f698207105533035e1fcba",
    measurementId: "G-WDJPZ3M28L"
};

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;