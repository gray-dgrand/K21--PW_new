interface Player {
  name: string;
  position: string;
  jerseyNumber: number;
}

class Team {
  name: string;
  players: Player[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  listPlayers(): string[] {
    return this.players.map(
      (player) =>
        `${player.jerseyNumber} - ${player.name} (${player.position})`
    );
  }
}

const team = new Team("Better Bytes FC");
team.addPlayer({ name: "Nam", position: "Forward", jerseyNumber: 9 });
team.addPlayer({ name: "Phong", position: "Midfielder", jerseyNumber: 8 });
console.log(team.listPlayers());

