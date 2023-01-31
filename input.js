
const firebaseConfig = {
  apiKey: "AIzaSyBbWCbHbsoe9R7iT41jGm4RxfbFETJYUmE",
  authDomain: "enzo-project-b7537.firebaseapp.com",
  databaseURL: "https://enzo-project-b7537-default-rtdb.firebaseio.com",
  projectId: "enzo-project-b7537",
  storageBucket: "enzo-project-b7537.appspot.com",
  messagingSenderId: "111183687601",
  appId: "1:111183687601:web:64af74dbdece2759d79790"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var Speechrecognition = window.webkitSpeechRecognition;
var recognition = new Speechrecognition();
 

function start_btn(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();

}

recognition.onresult= function(event){
    console.log(event);

    var result =event.results[0][0].transcript;
    console.log(result);


    document.getElementById("Problem").innerHTML = result;
  }

var form=document.getElementById('form')
form.addEventListener('submit',function(event){
  //preventdefalft prevents the form from autosubmitting 
  event.preventDefault()
   problem=document.getElementById("Problem").value;
  id=document.getElementById("Patientsinfo").value;
  console.log(problem,id);
  firebase.database().ref("/").child(id).update({
    requirement:problem,
    purpose:"patients problem"
  })

});
