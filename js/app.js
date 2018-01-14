function fillIn4() {
  let person4 = JSON.parse(this.response);
  document.getElementById("person4Name").innerHTML = person4.name

  let gReq = new XMLHttpRequest();
  gReq.addEventListener("load", fillInHome4);
  gReq.open("GET", person4.homeworld);
  gReq.send();
}

let hReq = new XMLHttpRequest();
hReq.addEventListener("load", fillIn4);
hReq.open("GET", "https://swapi.co/api/people/4/")
hReq.send();

function fillInHome4() {
  let person4Home = JSON.parse(this.response);
  document.getElementById("person4HomeWorld").innerHTML = person4Home.name;
}

function fillIn14(){
  let person14 = JSON.parse(this.response);
  document.getElementById("person14Name").innerHTML = person14.name;

  let iReq = new XMLHttpRequest();
  iReq.addEventListener("load", fillInSpecies14);
  iReq.open("GET", person14.species);
  iReq.send();
}

let jReq = new XMLHttpRequest();
jReq.addEventListener("load", fillIn14);
jReq.open("GET", "https://swapi.co/api/people/14/");
jReq.send();

function fillInSpecies14(){
  let person14Home = JSON.parse(this.response);
  document.getElementById("person14Species").innerHTML = person14Home.name;
}