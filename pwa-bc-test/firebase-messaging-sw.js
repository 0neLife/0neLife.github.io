importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js');
var config = {
  apiKey: "AIzaSyDJENVW874nkGUYHqYpQoEZxAiMkdzpdSg",
  authDomain: "pwa-bc-test.firebaseapp.com",
  databaseURL: "https://pwa-bc-test.firebaseio.com",
  projectId: "pwa-bc-test",
  storageBucket: "pwa-bc-test.appspot.com",
  messagingSenderId: "664593019563",
  appId: "1:664593019563:web:80e7dfea6d28e20793bdee",
  measurementId: "G-VNHWGGSRMJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hello World';
  const options = {
    body: payload.data.body
  };
  return self.registration.showNotification(title, options);
});