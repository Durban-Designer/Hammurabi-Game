//variables
let year = 1;
let starved = 0;
let immigrants = 5;
let population = 100;
let land = 1000;
let harvest = 3;
let rats = 200;
let rationsStore = 2800;
let landTrade = 22;
let rations = 2800;
let landBuy = $(".landBuy").value;
let food = $(".food").value;
let plant = $(".plant").value;
//gameUpdate
$(".makeItSo").addEventListener("click", gameUpdate());
function gameUpdate() {
  year++;
  foodCalc = food/20 - population;
  if (foodCalc > 0) {
    starved = 0;
  }
  else {
  starved = foodCalc;
  }
  immigrants = Math.floor(Math.random() * 10);
  population = population - starved + immigrants;
  land = land + landBuy;
  harvest = Math.floor(Math.random() * 5);
  rationsStore = rationsStore - food + (harvest * plant);
  rats = Math.floor(Math.random() * .2) * rationsStore;
  rationsStore = rationsStore - rats;
  landTrade = Math.floor(Math.random() * 9) + 17;
  rations = rationsStore;
}
//ration updating
$(".landBuy").addEventListener("onKeyUp",rationCalc());
$(".food").addEventListener("onKeyUp",rationCalc());
$(".plant").addEventListener("onKeyUp",rationCalc());
function rationCalc() {
  rations = rationsStore - (landBuy * landTrade) - food - plant;
  $(".rationCounter").innerHTML = rations;
  //can update logic
  if (rations < 0) {
    $(".button").removeClass(".makeItSo");
  else if (rations >= 0) {
    $(".button").addClass(".makeItSo");
  }
  }
}
