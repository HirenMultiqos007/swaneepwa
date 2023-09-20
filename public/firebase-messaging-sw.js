// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyD_lV42fKe0PFxRad4cWKcO_wucsvVBssk",
    authDomain: "pwa-swanee.firebaseapp.com",
    projectId: "pwa-swanee",
    storageBucket: "pwa-swanee.appspot.com",
    messagingSenderId: "566168567244",
    appId: "1:566168567244:web:ea4e86e9f9e91802397169"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});