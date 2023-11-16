const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

let numOfPlants = 20;
let spaceUsed = numOfPlants * 0.8;
let capacity = area - spaceUsed;

// This variable can and will be changed for testing.
let week = 3;

switch (week) {
    case 1: {
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * capacity)) {
                console.log("Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * capacity)){
                console.log("Plants need to be MONITORED!");
            } else {
                console.log("Plants need to be PLANTED!");
            }
        }
        break;
    }
    case 2: {
        numOfPlants = numOfPlants * 2;
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * capacity)) {
                console.log("Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * capacity)){
                console.log("Plants need to be MONITORED!");
            } else {
                console.log("Plants need to be PLANTED!");
            }
        }
        break;
    }
    case 3: {
        numOfPlants = numOfPlants * 4;
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * capacity)) {
                console.log("Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * capacity)){
                console.log("Plants need to be MONITORED!");
            } else {
                console.log("Plants need to be PLANTED!");
            }
        }
        break;
    }
    default: console.log("Have you forgotten about your garden?");
}