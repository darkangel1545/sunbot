module.exports = {
  name: "silah-efekt",
  code: `
  $image[https://api.popcat.xyz/gun?image=$userAvatar[$mentioned[1]]]
  $onlyIf[$getUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}