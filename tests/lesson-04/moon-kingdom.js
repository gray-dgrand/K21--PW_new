function createCharacters(characters) {
  const charactersPowerUp = characters.map((character) => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3,
  }));

  const possibleWinners = charactersPowerUp.filter(
    (character) => character.health > 1000
  );

  return { charactersPowerUp, possibleWinners };
}

function printLeaderboard(players) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const medals = ["🥇", "🥈", "🥉"];

  return sortedPlayers.map((player, index) => {
    const rank = index + 1;
    const prefix = medals[index] ? `${medals[index]} ` : "";
    return `${prefix}${rank}. ${player.name} - ${player.score} pts`;
  });
}

// Test
const characters = [
  { name: "Mario", level: 10, health: 400 },
  { name: "Luigi", level: 12, health: 380 },
  { name: "Peach", level: 20, health: 450 },
  { name: "Yoshi", level: 15, health: 300 },
];

const result = createCharacters(characters);
console.log(result.charactersPowerUp);
console.log(result.possibleWinners);

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];

console.log(printLeaderboard(players));

