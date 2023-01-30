

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAeucg75DDEd1r9gLVK6WxxT8YHX-0viCs",
      authDomain: "kwitter-4e361.firebaseapp.com",
      databaseURL: "https://kwitter-4e361-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e361",
      storageBucket: "kwitter-4e361.appspot.com",
      messagingSenderId: "1031459592177",
      appId: "1:1031459592177:web:fe210df8689bc5c93ed650"
    };
    
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




name_welcome=localStorage.getItem("user_name");
document.getElementById("names").innerHTML="WELCOME!"+"  "+ name_welcome +" "+ ":)";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name=" +Room_names);
       row="<div class='room_name1' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;

       
      });});}
getData();
function redirectToRoom(Rooms){
      console.log("selected_room="+ Rooms);
      localStorage.setItem("room_name", Rooms);

      window.location="kwitter_page.html";
}


function logout(){
      
      window.location="index.html";
}

function addRoom(){
     room=document.getElementById("room_name").value;
     localStorage.setItem("room_name" ,room);
     firebase.database().ref("/").child(room).update({purpose:"add room name"});

     window.location ="kwitter_page.html";
}

