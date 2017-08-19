//variables
let year = 3001;
let starved = 0;
let immigrants = 5;
let population = 100;
let land = 1000;
let harvest = 3;
let spaceCrabs = 200;
let rationsStore = 2800;
let landTrade = 22;
let rations = 2800;
let landBuy = $(".landBuy").value;
let food = $(".food").value;
let plant = $(".plant").value;
//gameUpdate
$(".makeItSo").click(gameUpdate());
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
  spaceCrabs = Math.floor(Math.random() * .2) * rationsStore;
  rationsStore = rationsStore - spaceCrabs;
  landTrade = Math.floor(Math.random() * 9) + 17;
  rations = rationsStore;
  $(".year").innerHTML = year;
  $(".starved").innerHTML = starved;
  $(".immigrants").innerHTML = immigrants;
  $(".population").innerHTML = population;
  $(".land").innerHTML = land;
  $(".harvest").innerHTML = harvest;
  $(".spaceCrabs").innerHTML = spaceCrabs;
  $(".rationsStore").innerHTML = rationsStore;
  $(".landTrade").innerHTML = landTrade;
  $(".rationsCounter").innerHTML = rations;
}
//ration updating
$(".landBuy").on("onKeyUp",rationCalc());
$(".food").on("onKeyUp",rationCalc());
$(".plant").on("onKeyUp",rationCalc());
function rationCalc() {
  rations = rationsStore - (landBuy * landTrade) - food - plant;
  $(".rationCounter").innerHTML = rations;
  //can update logic
  if (rations < 0) {
    $(".button").removeClass(".makeItSo");
  if (rations >= 0) {
    $(".button").addClass(".makeItSo");
  }
  }
}
$(".startNew").click(gameNew());
function gameNew() {
  location.reload();
  }
