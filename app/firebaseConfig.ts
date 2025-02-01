import * as firebase from "firebase/app"

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqYkW679Ntw-zOpsR-8rRIVHLwaSZYhzA",
  authDomain: "trackandshop-70b7d.firebaseapp.com",
  projectId: "trackandshop-70b7d",
  storageBucket: "trackandshop-70b7d.firebasestorage.app",
  messagingSenderId: "207702034789",
  appId: "1:207702034789:web:1f925de2ac2bd72eb9b98c",
};

const app = firebase.initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
