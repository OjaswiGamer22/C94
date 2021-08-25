var firebaseConfig = {
    apiKey: "AIzaSyAeOeP5SA47MgDuhW3SP3fwyNel9cWs6Xs",
    authDomain: "practice-34d02.firebaseapp.com",
    databaseURL: "https://practice-34d02-default-rtdb.firebaseio.com",
    projectId: "practice-34d02",
    storageBucket: "practice-34d02.appspot.com",
    messagingSenderId: "559108009475",
    appId: "1:559108009475:web:4b80a4204a7749cb752836"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose:"adding user_name"  
      });
      
  }