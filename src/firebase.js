// me traigo firebase
import firebase from 'firebase/app';
// me traigo firestore
import "firebase/firestore";
//copio mis credenciales
const firebaseConfig = {

    apiKey: "AIzaSyAXCVN23XrlL3xr_s6d3YxpaIQAX0RIO8E",

    authDomain: "proyecto-react-76695.firebaseapp.com",

    projectId: "proyecto-react-76695",

    storageBucket: "proyecto-react-76695.appspot.com",

    messagingSenderId: "320284758079",

    appId: "1:320284758079:web:345ff57749b204e4c6a88a"

};
//inicializo firebase
const app = firebase.initializeApp(firebaseConfig);

//me traigo firestore
export const firestore = firebase.firestore(app);