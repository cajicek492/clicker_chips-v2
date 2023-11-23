const chip = document.getElementById("chip");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoClicker = document.getElementById("autoclicker")

let numberOfChips = 0;
let chipAutoClick = 0;
let costOfClickUpgrade = 10;
let costOfAutoClicker = 2500;
let clickUpgradeIncrease = 1;
let chipAutoInterval;

chip.onclick = () => {
    numberOfChips += clickUpgradeIncrease;
    counter.innerHTML = "Chips: " + numberOfChips;
}

function clickUpgradeFunction () {
    if (numberOfChips >= costOfClickUpgrade) {
        numberOfChips -= costOfClickUpgrade;

        costOfClickUpgrade += 10
        upgrade.innerHTML = "Upgrade: " + costOfClickUpgrade + " Chips";

        counter.innerHTML = "Chips: " + numberOfChips;
        clickUpgradeIncrease++;
    }
}

autoClicker.onclick = () => {
    if (numberOfChips >= costOfAutoClicker) {
      numberOfChips -= costOfAutoClicker;
      costOfAutoClicker += 2500;
      counter.innerText = "Chips: " + numberOfChips;
      autoClicker.innerHTML = "Auto Clicker: " + costOfAutoClicker + " Chips";
      chipAutoClick += 100;
      clearInterval(chipAutoInterval);
      chipAutoInterval = setInterval(() => {
        numberOfChips += chipAutoClick;
        counter.innerText = "Chips: " + numberOfChips;
      }, 1000);
    }
  };

function chipsCheat () {
    numberOfChips += 2500;
    counter.innerText = "Chips: " + numberOfChips;
}

upgrade.onclick = clickUpgradeFunction;