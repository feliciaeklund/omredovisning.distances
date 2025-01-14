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
let whatCity = prompt("Vilken stad?");
