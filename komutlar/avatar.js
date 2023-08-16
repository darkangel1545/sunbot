module.exports = {
  name: "avatar",
  code: `
  $title[İşte Avatarınız!]
  $image[$userAvatar[$mentioned[1]]]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}