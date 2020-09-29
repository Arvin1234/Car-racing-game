import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHJUjfE-PH9J42Cq0ja9XO4mX0R9KCSJo",
    authDomain: "car-racing-game-a082a.firebaseapp.com",
    databaseURL: "https://car-racing-game-a082a.firebaseio.com",
    projectId: "car-racing-game-a082a",
    storageBucket: "car-racing-game-a082a.appspot.com",
    messagingSenderId: "221395081972",
    appId: "1:221395081972:web:fc8eab4baf1774b2e39ca1"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();