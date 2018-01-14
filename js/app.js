function fillIn4() {
  let person4 = JSON.parse(this.response);
  document.getElementById("person4Name").innerHTML = person4.name

  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", fillInHome4);
  oReq.open("GET", person4.homeworld);
  oReq.send();
}

let hReq = new XMLHttpRequest();
hReq.addEventListener("load", fillIn4);
hReq.open("GET", "https://swapi.co/api/people/4/")
hReq.send();

function fillInHome4() {
  let person4Home = JSON.parse(this.response);
  document.getElementById("person4HomeWorld").innerHTML = person4Home.name;
}