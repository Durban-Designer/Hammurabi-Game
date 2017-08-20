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
$(".makeItSo").on("click", gameUpdate);
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
  $(".year").html(year);
  $(".starved").html(starved);
  $(".immigrants").html(immigrants);
  $(".population").html(population);
  $(".land").html(land);
  $(".harvest").html(harvest);
  $(".spaceCrabs").html(spaceCrabs);
  $(".rationsStore").html(rationsStore);
  $(".landTrade").html(landTrade);
  $(".rationsCounter").html(rations);
  if (year == 3011) {
    alert("YOU WIN!!");
  }
}
//ration updating
$( ".landBuy" ).on("keyup", rationCalc);
$( ".food" ).on("keyup", rationCalc);
$( ".plant" ).on("keyup", rationCalc);
function rationCalc() {
  rations = rationsStore - (landBuy * landTrade) - food - plant;
  $(".rationCounter").html(rations);
  //can update logic
  if (rations < 0) {
    $(".button").removeClass(".makeItSo");
  }
  if (rations >= 0) {
    $(".button").addClass(".makeItSo");
  }
}
$(".startNew").on("click", refresh);
  function refresh() {
  location.reload();
  }
