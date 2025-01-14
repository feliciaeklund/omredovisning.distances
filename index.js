function getDistance(cityId1, cityId2) {
    for (let space of distances) {
        if ((space.city1 === cityId1 && space.city2 === cityId2) ||
            (space.city1 === cityId2 && space.city2 === cityId1)) {
            return space.distance / 10;
        }
    }
}
const main = document.querySelector("main");
const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const table = document.querySelector("#table");
const city = document.querySelector("#cities");
const info = document.querySelector("h3");
const spanClosest = document.getElementById("closest");
const spanFurthest = document.getElementById("furthest");

let foundCity = false;
let id;
let furthest = distances[0].distance;
let closest = distances[0].distance;
let furthestId;
let closestId;
let furthestName;
let closestName;

let whatCity = prompt("Vilken stad?");

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    city.append(div);
    div.setAttribute("class", "cityBox");
    div.setAttribute("id", i);
    div.textContent = cities[i].name;
}

for (i = 0; i <= 38; i++) {
    if (whatCity == cities[i].name) {
        document.getElementById(i).classList.add("target");
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        foundCity = true;
        title.textContent = cities[i].name;
        id = i;

    }
}

