const firebaseConfig = {
      apiKey: "AIzaSyB1BF-viSDJh9Vg5Y35rNsR4XLV82jEc3g",
      authDomain: "chatapp-625f2.firebaseapp.com",
      databaseURL: "https://chatapp-625f2-default-rtdb.firebaseio.com",
      projectId: "chatapp-625f2",
      storageBucket: "chatapp-625f2.appspot.com",
      messagingSenderId: "1079147558609",
      appId: "1:1079147558609:web:6c63415f305685bb57b7f0"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name;
   
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";      
}
