import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyD_lV42fKe0PFxRad4cWKcO_wucsvVBssk",
    authDomain: "pwa-swanee.firebaseapp.com",
    projectId: "pwa-swanee",
    storageBucket: "pwa-swanee.appspot.com",
    messagingSenderId: "566168567244",
    appId: "1:566168567244:web:ea4e86e9f9e91802397169"
  };

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

 export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BGXW1yEgCnZWNDOF6-zQ2RD_--_u6w8vLaNrfLY-VNU4knQkHXcK3-PRjP0zWFuMekcJboEt-OHnVlPfYg73KPc'}).then((currentToken) => {
      if (currentToken) {
        console.warn('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.warn('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.warn('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});