importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBojUDwIZpB7afqyVRnCofE6J4m7eN-HEE",
    authDomain: "ascourier-81b1f.firebaseapp.com",
    projectId: "ascourier-81b1f",
    storageBucket: "ascourier-81b1f.appspot.com",
    messagingSenderId: "8311576366",
    appId: "1:8311576366:web:86a5e3adfd5e631dd24cbf"
});

const messaging = firebase.messaging(); 