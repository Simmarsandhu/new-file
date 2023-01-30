var item="";
function add1(){
    item +="paracetamol"
    console.log(item);
}
function add2(){
    item +=" BENADRY"
    console.log(item);
}function add3(){
    item +=" STOMACH RELIEF    "
    console.log(item);
}function add4(){
    item +=" PUDHIN HARA "
    console.log(item);
}function add5(){
    item +=" GASTO INTESTINAL RELIEF "
    console.log(item);
}function add6(){
    item +=" SOFI"
    console.log(item);
}function add7(){
    item +="paracetamol"
    console.log(item);
}function add8(){
    item +="paracetamol"
    console.log(item);
}

function myFunction() {
    document.getElementById("myPopup").innerHTML=item;
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}