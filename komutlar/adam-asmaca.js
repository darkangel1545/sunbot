module.exports = {
  name: "adam-asmaca",
  code: `
  $djsEval[
  const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'SunBot Adam Asmaca',
    color: '#5865F2'
  },
  hangman: { hat: '🧢', head: '😐', shirt: '👚', pants: '👖', boots: '👟👟' },
  customWord: '$randomText[Cay;Kahve;Oyun;Bilgisayar;Su;Odun;Telefon;Tablet;Uygulama;Oyna;Dil;Discord;Sohbet;Arkadas;Bot;Robot;Gunes;Kod;Yazi;Market;Siparis;Tatli;Baklava;Yay;Parti;Sahip;Yonetici;Sehir;İlce;Yaz;Kis;İlkbahar;Sonbahar;Tarak;Sac;Kebap;Ekmek;Doner;Dolap;İnsan;Hayvan;Cevre;Sicak;Soguk;Yasli;Genc;Cocuk;Usta;Acemi;Ogretmen;Balon;Eglence;Mekan;Konser;Muzik;Sarki;Gun;Ay;Yil;Sponsor;Reklam;Rakip;Muz;Elma;Portakal;Mandalina;Kiraz;Seftali;Cilek;Ayva;Karpuz;Kavun;Buyuk;Kucuk;Anne;Baba]',
  timeoutTime: 60000,
  theme: 'nature',
  winMessage: 'Oyunu kazandın! Kelime **{word}** idi.',
  loseMessage: 'Kaybettin! Kelime **{word}** idi.',
  playerOnlyMessage: 'Sadece **{player}** butonları kullanabilir!'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});]
  `
}