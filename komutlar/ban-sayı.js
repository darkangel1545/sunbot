module.exports = {
  name: "ban-sayı",
  code: `
  $title[$username[$mentioned[1]] İsimli Kullanıcının Banladığı Kişi Sayısı]
  $description[
  <@$mentioned[1]> adlı kullanıcının $getUserVar[bansayı;$mentioned[1]] tane banladığı kullanıcı var.

  **Son Banladığı Kullanıcı:** $username[$getUserVar[sonban;$mentioned[1]]]
  ]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}