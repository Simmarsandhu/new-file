var score=0;
var yess=document.getElementsByName("yesorno").value;
 
function yes(){
if(yess ="yes"){
    score = score+1;
        console.log(score);
    }

}
function results(){
    

    if(score==1){
        document.getElementById("div2").innerHTML="<div id='div_simp'><h1>RESULTS</h1><h2>looks like you got fever </h2><p>Rest and drink plenty of fluids. Medication isn't needed. <br>Call the doctor if the fever is accompanied by a severe headache, <br>stiff neck, shortness of breath, or other unusual signs or symptoms.</p></div>";
    }

    if(score==2){
        document.getElementById("div2").innerHTML="<div id='div_simp'><h1>Your symptoms matchs with that of  common cold</h1><p>There's no cure for the common cold. Most cases of the common cold get better without treatment, usually within a week to 10 days. But a cough may linger for a few more days. The best thing you can do is take care of yourself while your body heals. High fever or severe symptoms are reasons to see a doctor, especially in children.</p></div>";
    }
    if(score==3){
        document.getElementById("div2").innerHTML="<div  id='div_simp'><h1>Your symptoms matchs with that of flu<p>Flu is primarily treated with rest and fluid intake to allow the body to fight the infection on its own. Paracetamol may help cure the symptoms but NSAIDs should be avoided. An annual vaccine can help prevent the flu and limit its complications.</p></h1></div>";
    }
    if(score==4){
        document.getElementById("div2").innerHTML="<div id='div_simp'><h1>looks like you got viral fever</h1><p>these Fevers usually arent something to worry about. But when theyre high enough, they can pose some health risks.<br>Treatment for viral fever is determined by the severity of the illness. Doctors typically give drugs to alleviate the symptoms of viral fever and lower the temperature. Self-medication can exacerbate an existing problem. As a result, treatment should always be sought from a doctor.</p></div>";
    }
    if(score==5){
        document.getElementById("div2").innerHTML="<div id='div_simp'><h1>Your symptoms matchs with that of covid</h1><p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p></div>";
    }
}