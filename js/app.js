
function fillIn (){
  //console.log(this.responseText);
  let person4 = JSON.parse(this.response);
  document.getElementById("person4Name").innerHTML = person4.name
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", fillIn);
oReq.open("GET", "https://swapi.co/api/people/4/")
oReq.send();

