function fillIn4() {
  let person4 = JSON.parse(this.response);
  document.getElementById("person4Name").innerHTML = person4.name

  let p4Home = new XMLHttpRequest();
  p4Home.addEventListener("load", fillInHome4);
  p4Home.open("GET", person4.homeworld);
  p4Home.send();
}

let p4 = new XMLHttpRequest();
p4.addEventListener("load", fillIn4);
p4.open("GET", "https://swapi.co/api/people/4/")
p4.send();

function fillInHome4() {
  let person4Home = JSON.parse(this.response);
  document.getElementById("person4HomeWorld").innerHTML = person4Home.name;
}

function fillIn14() {
  let person14 = JSON.parse(this.response);
  document.getElementById("person14Name").innerHTML = person14.name;

  let p14Species = new XMLHttpRequest();
  p14Species.addEventListener("load", fillInSpecies14);
  p14Species.open("GET", person14.species);
  p14Species.send();
}

let p14 = new XMLHttpRequest();
p14.addEventListener("load", fillIn14);
p14.open("GET", "https://swapi.co/api/people/14/");
p14.send();

function fillInSpecies14() {
  let person14Home = JSON.parse(this.response);
  document.getElementById("person14Species").innerHTML = person14Home.name;
}

let filmsReq = new XMLHttpRequest();
filmsReq.addEventListener("load", filmList);
filmsReq.open("GET", "https://swapi.co/api/films/");
filmsReq.send();

function filmList() {

  let swFilms = JSON.parse(this.response);
  let swArr = swFilms.results;

  swArr.forEach(function (element) {
    let filmLi = document.createElement("li");
    filmLi.className = "film";
    let findFilmList = document.getElementById("filmList");
    findFilmList.appendChild(filmLi);
    let filmH2 = document.createElement("h2");
    filmH2.className = "filmTitle";
    filmH2.innerHTML = element.title;
    filmLi.appendChild(filmH2);
    let planetH3 = document.createElement("h3");
    planetH3.innerHTML = "Planets";
    filmLi.appendChild(planetH3);

    let planetUl = document.createElement("ul");
    planetUl.className = "filmPlanets";
    filmLi.appendChild(planetUl);

    let swArr2 = element.planets;

    swArr2.forEach(function (element) {
      let planetsReq = new XMLHttpRequest();
      planetsReq.addEventListener("load", getPlanets);
      planetsReq.open("GET", element);
      planetsReq.send();

      function getPlanets() {
        let filmPlanets = JSON.parse(this.response);
        let planetNames = filmPlanets.name;

        let planetLi = document.createElement("li");
        planetLi.className = "planet";
        planetUl.appendChild(planetLi);
        let planetH4 = document.createElement("h4");
        planetH4.className = "planetName";
        planetLi.appendChild(planetH4);
        planetH4.innerHTML = planetNames;
      }
    })
  })
}