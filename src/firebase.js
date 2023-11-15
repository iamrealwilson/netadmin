import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAdCFKV-J7zEeULNoWL_xUd9_WnvYD441E",
  authDomain: "netflixx-36c9e.firebaseapp.com",
  projectId: "netflixx-36c9e",
  storageBucket: "netflixx-36c9e.appspot.com",
  messagingSenderId: "592605820085",
  appId: "1:592605820085:web:ac206ec517fb9b6dabfafc",
  measurementId: "G-Z5NZ0T0F6R"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
