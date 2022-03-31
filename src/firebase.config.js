import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAJD4GatG8C2hBF9zmmfkHIIpiGX_L_S4o",
    authDomain: "restaurantapp-3ebce.firebaseapp.com",
    databaseURL: "https://restaurantapp-3ebce-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-3ebce",
    storageBucket: "restaurantapp-3ebce.appspot.com",
    messagingSenderId: "170287144286",
    appId: "1:170287144286:web:59721dbca3a51f480143cf"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore  = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };
