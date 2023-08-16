module.exports = {
  name: "yılan-oyunu",
  code: `
$djsEval[
const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'SunBot Yılan Oyunu',
    overTitle: 'Oyun Bitti',
    color: '#5865F2'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🐸', body: '🟩', tail: '🟢', skull: '💀' },
  foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Sadece {player} butonları kullanabilir!'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
]
`
}