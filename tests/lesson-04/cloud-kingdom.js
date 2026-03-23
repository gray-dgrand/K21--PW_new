let playerName = "Mario";
let currentLives = 3;

const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

const totalCoins = level1Coins + level2Coins + level3Coins;
const averageCoins = totalCoins / 3;
const remainderBy3 = totalCoins % 3;

console.log("Player:", playerName);
console.log("Current lives:", currentLives);
console.log("Total coins:", totalCoins);
console.log("Average coins:", averageCoins);
console.log("Remainder (total % 3):", remainderBy3);

