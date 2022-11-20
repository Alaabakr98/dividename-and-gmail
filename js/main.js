 function addDomain(){
 var totalName =document.getElementById("totalName").value;
var index = totalName.indexOf("@");
var name =totalName.slice(0 ,index);
var domain =totalName.slice( index+1 );
document.getElementById("name") .value=name;
document.getElementById("domain").value=domain;



}