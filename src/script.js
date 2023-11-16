//Part One

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; //78.5375
const plantSpace = 0.8;

let numOfPlants = 20;
let maxNumOfPlants = area / plantSpace; //98.171875

// This variable can and will be changed for testing.
let week = 1.5;

switch (week) {
  case 1: {
    if (week >= 1 && week <= 3) {
      if (numOfPlants > (0.8 * maxNumOfPlants)) {
        console.log(maxNumOfPlants);
        console.log("Week One: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week One: Plants need to be MONITORED!");
      } else {
        console.log("Week One: Plants need to be PLANTED!");
      }
    }
    break;
  }
  case 2: {
    numOfPlants = numOfPlants * (2 ** (week - 1));
    if (week >= 1 && week <= 3) {
      if (numOfPlants > 0.8 * maxNumOfPlants) {
        console.log("Week Two: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week Two: Plants need to be MONITORED!");
      } else {
        console.log("Week Two: Plants need to be PLANTED!");
      }
    }
    break;
  }
  case 3: {
    numOfPlants = numOfPlants * (2 ** (week - 1));
    console.log(numOfPlants);
    if (week >= 1 && week <= 3) {
      if (numOfPlants > 0.8 * maxNumOfPlants) {
        console.log("Week Three: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week Three: Plants need to be MONITORED!");
      } else {
        console.log("Week Three: Plants need to be PLANTED!");
      }
    }
    break;
  }
  default:
    console.log("Have you forgotten about your garden?");
}
console.log("================================");
//Part Two
let newPlantStart = 100;
let newWeek = 10;
let totalAfterTenWeeks = newPlantStart * (2 ** (newWeek - 1));
console.log(totalAfterTenWeeks);
let spaceNeeded = totalAfterTenWeeks * plantSpace;
let expandedRadius = Math.sqrt(spaceNeeded / PI);
console.log(`You will need over ${spaceNeeded} square meters if you do not prune until 10 weeks.`);
console.log(`Radius of expanded garden: ${expandedRadius} square meters`);

