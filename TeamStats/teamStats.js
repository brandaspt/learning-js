const team = {
    _players: [
        {
            firstName: 'Sergio',
            lastName: 'Oliveira',
            age: 24,
        },
        {
            firstName: 'Luiz',
            lastName: 'Diaz',
            age: 26,
        },
        {
            firstName: 'Tecatito',
            lastName: 'Corona',
            age: 23,
        },
    ],
    _games: [
        {
            opponent: 'benfica',
            teamPoints: 23,
            opponentPoints: 20,
        },
        {
            opponent: 'sporting',
            teamPoints: 27,
            opponentPoints: 23,
        },
        {
            opponent: 'braga',
            teamPoints: 30,
            opponentPoints: 25,
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(newPlayer)
    },
    addGame(opponentName, teamPoints, opponentPoints) {
        const newGame = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this._games.push(newGame);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('farense', 30, 20);
team.addGame('rio ave', 40, 10);
team.addGame('paços', 35, 20);
console.log(team.games);
