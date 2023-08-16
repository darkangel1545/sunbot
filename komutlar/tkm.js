module.exports = {
  name: "tkm",
  code: `
  $djsEval[
  const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'SunBot Taş Kağıt Makas',
    color: '#5865F2',
    description: 'Aşağıdaki butonlardan seçiminizi yapın.'
  },
  buttons: {
    rock: 'Taş',
    paper: 'Kağıt',
    scissors: 'Makas'
  },
  emojis: {
    rock: '🌑',
    paper: '📄',
    scissors: '✂️'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  pickMessage: 'You choose {emoji}.',
  winMessage: '**{player}** oyunu kazandı! Tebrikler.',
  tieMessage: 'Oyun berabere bitti. Oyunu kazanan yok!',
  timeoutMessage: 'Oyun yarıda kaldı. Oyunu kazanan yok!',
  playerOnlyMessage: 'Sadece oyuncular butonları kullanabilir.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
  ]
  $onlyIf[$message!=;**Lütfen oynayacağın kişiyi etiketle!**]
  $onlyIf[$mentioned[1]!=$authorID;**Kendinle oynayamazsın!**]
  `
}