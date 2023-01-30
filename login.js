username=document.getElementById("username").value;
password=document.getElementById("password").value;

var form=document.getElementById('form')
//event listener ,whenever an event gets trigger it will call a function holding the value event 
form.addEventListener('submit',function(event){
  //preventdefalft prevents the form from autosubmitting 
  event.preventDefault()

  var username =document.getElementById("username").value
  var password=document.getElementById("password").value
  if(username == "admin" && password == "2525"){
    window.location="db.html";
    document.getElementById("username").innerHTML="";
    document.getElementById("username").innerHTML="";

  }
  else{
    alert("wrong details")
    
  }
})
 