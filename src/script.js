const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; //78.5375

let numOfPlants = 20;
let maxNumOfPlants = area / 0.8; //98.171875

// This variable can and will be changed for testing.
let week = 3;

switch (week) {
    case 1: {
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * maxNumOfPlants)) {
                console.log("Week One: Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * maxNumOfPlants)){
                console.log("Week One: Plants need to be MONITORED!");
            } else {
                console.log("Week One: Plants need to be PLANTED!");
            }
        }
        break;
    }
    case 2: {
        numOfPlants = numOfPlants * 2;
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * maxNumOfPlants)) {
                console.log("Week Two: Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * maxNumOfPlants)){
                console.log("Week Two: Plants need to be MONITORED!");
            } else {
                console.log("Week Two: Plants need to be PLANTED!");
            }
        }
        break;
    }
    case 3: {
        numOfPlants = numOfPlants * 4;
        if (week >= 1 && week <= 3) {
            if (numOfPlants > (.80 * maxNumOfPlants)) {
                console.log("Week Three: Plants need to be PRUNED!");
            } else if (numOfPlants >= (.50 * maxNumOfPlants)){
                console.log("Week Three: Plants need to be MONITORED!");
            } else {
                console.log("Week Three: Plants need to be PLANTED!");
            }
        }
        break;
    }
    default: console.log("Have you forgotten about your garden?");
}