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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("Message").value;
          firebase.database().ref(room_name).push({
           Name:user_name,
            Message:msg,
            likes:1


          });
          document.getElementById("Message").innerHTML=" ";

          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    User_name=message_data['Name'];
    message=message_data['Message'];
    likes=message_data['likes'];

    username="<h4>"+room_name+"<img src='tick.png' id='tick_img'></h4>";
    msg="<h4 id='messages'>"+message+"</h4>"
    like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='update_likes(this.id)'>";
    span_tag="<span class='glyphicon glyphicon-thumbs-up'>likes"+likes+"</span></button><hr>";

    row=username+msg;
    console.log(likes);


    document.getElementById("output").innerHTML +=row;



//End code
      } });  }); }
getData();




function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location.replace("index.html");
}