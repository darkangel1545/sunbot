module.exports = {
  name: "mayın-tarlası",
  code: `
  $djsEval[
  const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'SunBot Mayın Tarlası',
    color: '#5865F2',
    description: 'Mayın tarlası oyununa hoşgeldiniz! Bu oyunda butonlara tıklayacaksınız ve bomba tuzağına yakalanmamaya çalışacaksınız. Başarılar dilerim!'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'Tebrikler! Oyunu kazandın.',
  loseMessage: 'Oyunu kaybettin! Şansını tekrar dene.',
  playerOnlyMessage: 'Sadece {player} isimli kullanıcı butonları kullanabilir!'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
  ]
  `
}