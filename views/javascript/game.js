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
let starvedTotal = 0;
let points = 0;
let landRatio = 10;
var landBuy, food, plant, plagueNumber;
//gameUpdate
$(".makeItSo").off().on("click", gameUpdate);
function gameUpdate() {
  landBuy = $(".landBuy").val();
  food = $(".food").val();
  plant = $(".plant").val();
  year++;
  foodCalc = population - food/20;
  if (foodCalc < 0) {
    starved = 0;
  }
  else {
  starved = foodCalc;
  }
  starvedTotal = Number(starvedTotal) + Number(starved);
  immigrants = Math.floor(Math.random() * 10);
  population = population - starved + immigrants;
  land = Number(land) + Number(landBuy);
  harvest = Math.floor(Math.random() * 5) + 1;
  rationsStore = rationsStore - food + (harvest * plant);
  spaceCrabs = Math.floor((Math.random() * .2) * Number(rationsStore));
  rationsStore = rationsStore - spaceCrabs;
  landTrade = Math.floor(Math.random() * 9) + 17;
  landRatio = land / population
  alert(spaceCrabs);
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
  $(".rationCounter").html(rations);
  $( ".landBuy" ).val("");
  $( ".food" ).val("");
  $( ".plant" ).val("");
  //plague functionality
  plague = Math.floor(Math.random() * 25) + 1;
  plagueNumber = Math.ceil((Math.random() * .5) * population) + 1;
  $(".plague").css({display: "none"});
  if (plague == 6 || plague == 12) {
    $(".plague").css({display: "inline"});
    $(".plagueNumber").html(plagueNumber);
    population = population - plagueNumber;
    $(".population").html(population);
  }
  //failure
  if (starvedTotal >= 50) {
    pointCalc();
    $(".wrapper").css({"grid-template-rows":"150px 140px 120px 120px"});
    $(".b").css({display: "none"});
    $(".c").css({display: "none"});
    $(".d").css({display: "none"});
    $(".e").css({"grid-row":"4"});
    $(".g").css({display: "inline"});
    $(".h").css({display: "inline"});
    $(".starvedTotal").html(starvedTotal);
    $(".landRatio").html(landRatio);
    $(".points").html(points);
  }
  //game ending
  if (year == 3011 & starvedTotal < 50) {
    landRatio = land / population;
    pointCalc();
    $(".wrapper").css({"grid-template-rows":"150px 260px 120px 120px"});
    $(".b").css({display: "none"});
    $(".c").css({display: "none"});
    $(".d").css({display: "none"});
    $(".e").css({"grid-row":"4"});
    $(".f").css({display: "inline"});
    $(".h").css({display: "inline"});
    $(".starvedTotal").html(starvedTotal);
    $(".landRatio").html(landRatio);
    $(".points").html(points);
    if (points == 0) {
      $(".fink").css({display: "none"});
      $(".meh").css({display: "inline"});
    }
    if (points == 1) {
      $(".fink").css({display: "none"});
      $(".good").css({display: "inline"});
    }
    if (points == 2) {
      $(".wrapper").css({"grid-template-rows":"150px 260px 180px 120px"});
      $(".fink").css({display: "none"});
      $(".best").css({display: "inline"});
    }
  }
}
function pointCalc() {
  if (starvedTotal == 0) {
    points = points + 1;
  }
  if (starvedTotal > 10) {
    points = points - 1;
  }
  if (starvedTotal > 20) {
    points = points - 1;
  }
  if (landRatio > 10) {
    points = points + 1;
  }
  if (landRatio > 15) {
    points = points + 1;
  }
  if (landRatio < 10) {
    points = points - 1;
  }
  if (landRatio < 20) {
    points = points - 1;
  }
}
//ration updating
$( ".landBuy" ).on("keyup", rationCalc);
$( ".food" ).on("keyup", rationCalc);
$( ".plant" ).on("keyup", rationCalc);
function rationCalc() {
  landBuy = $(".landBuy").val();
  food = $(".food").val();
  plant = $(".plant").val();
  landTotal = Number(land) + Number(landBuy);
  maxTill = population * 10;
  rations = rationsStore - (landBuy * landTrade) - food - plant;
  $(".rationCounter").html(rations);
  //can update logic
  if (rations < 0 || plant > landTotal || landTotal < 0 || food < 0 || plant < 0 || plant > maxTill) {
    $(".makeItSo").off();
    $(".makeItSo").css({color: "#f00"});
  }
  if (rations >= 0 & plant <= landTotal & landTotal >= 0 & food >= 0 & plant >= 0 & plant <= maxTill) {
    $(".makeItSo").off().on("click", gameUpdate);
    $(".makeItSo").css({color: "#7071b5"});
  }
}
//new game
$(".startNew").on("click", function(){
  location.reload();
});
