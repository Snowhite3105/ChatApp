const firebaseConfig = {
      apiKey: "AIzaSyB1BF-viSDJh9Vg5Y35rNsR4XLV82jEc3g",
      authDomain: "chatapp-625f2.firebaseapp.com",
      databaseURL: "https://chatapp-625f2-default-rtdb.firebaseio.com",
      projectId: "chatapp-625f2",
      storageBucket: "chatapp-625f2.appspot.com",
      messagingSenderId: "1079147558609",
      appId: "1:1079147558609:web:6c63415f305685bb57b7f0"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
