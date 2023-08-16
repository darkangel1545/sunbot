module.exports = {
  name: "tic-tac-toe",
  code: `
  $djsEval[
  const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'SunBot Tic Tac Toe',
    color: '#5865F2',
    statusTitle: 'Durum',
    overTitle: 'Oyun Bitti!'
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'DANGER',
  oButtonStyle: 'PRIMARY',
  turnMessage: '{emoji} | **{player}** isimli oyuncunun sırası!',
  winMessage: '{emoji} | **{player}** oyunu kazandı!',
  tieMessage: 'Oyun Berabere Bitti!',
  timeoutMessage: 'Oyunu Kazanan Yok!',
  playerOnlyMessage: 'Düğmeleri sadece {player} ve {opponent} kullanabilir!**'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
  
  ]
  $onlyIf[$mentioned[1]!=$authorID;**Kendinizle oynayamazsınız!**]
  $suppressErrors[**Lütfen oyunu oynayacağınız kişiyi etiketleyin!**]
  `
}