//Part One

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; //78.5375
const plantSpace = 0.8;

let numOfPlants = 20;
let maxNumOfPlants = area / plantSpace; //98.171875

// This variable can be changed to 1,2 or 3 for testing.
let week = 1;

switch (week) {
  case 1: {
    if (week >= 1 && week <= 3) {
      if (numOfPlants > 0.8 * maxNumOfPlants) {
        console.log(maxNumOfPlants);
        console.log("Week One: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week One: Plants need to be MONITORED!");
      } else {
        console.log("Week One: Plants can be PLANTED!");
      }
    }
    break;
  }
  case 2: {
    numOfPlants = numOfPlants * 2 ** (week - 1);
    if (week >= 1 && week <= 3) {
      if (numOfPlants > 0.8 * maxNumOfPlants) {
        console.log("Week Two: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week Two: Plants need to be MONITORED!");
      } else {
        console.log("Week Two: Plants can be PLANTED!");
      }
    }
    break;
  }
  case 3: {
    numOfPlants = numOfPlants * 2 ** (week - 1);
    console.log(numOfPlants);
    if (week >= 1 && week <= 3) {
      if (numOfPlants > 0.8 * maxNumOfPlants) {
        console.log("Week Three: Plants need to be PRUNED!");
      } else if (numOfPlants >= 0.5 * maxNumOfPlants) {
        console.log("Week Three: Plants need to be MONITORED!");
      } else {
        console.log("Week Three: Plants can be PLANTED!");
      }
    }
    break;
  }
  default: {
    break;
  }
}
console.log("================================");

//Part Two


let newNumOfPlants = 100;
let newWeek = 10;

let weeklyGrowth = newNumOfPlants * (2 ** (newWeek - 1));
let spaceTaken = weeklyGrowth * plantSpace;

// We have not covered functions just yet but 
// it's the only way I found to do the square
// root of a value
let expandedRadius = Math.sqrt(spaceTaken / PI);

// Warning for Part Three
try {
    if (weeklyGrowth < 0) {
      console.log("Plants need to be PLANTED!");
    } else if (weeklyGrowth >= maxNumOfPlants) {
      throw `WARNING! You have reached the max for a ${radius} meter circular garden!`;
    }
  } catch (e) {
    console.log(e);
  }


// Changing logic so warning can be provided
// for different starting plant count and
// different weeks.


if (weeklyGrowth > 0.8 * maxNumOfPlants) {
  console.log("Plants need to be PRUNED!");
} else if (weeklyGrowth >= 0.5 * maxNumOfPlants) {
  console.log("Plants need to be MONITORED!");
} else if (weeklyGrowth < 50) {
    console.log("Plants can be PLANTED!");
}

console.log(`Capacity per ${radius} meter garden: ${maxNumOfPlants}`);
console.log(`Current Number of Plants: ${weeklyGrowth}`);
console.log(`Radius of expanded garden: ${expandedRadius} square meters`);


