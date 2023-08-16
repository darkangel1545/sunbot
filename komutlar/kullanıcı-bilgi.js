module.exports = {
  name: "kullanıcı-bilgi",
  code: `
  $title[$username[$mentioned[1]]]
  $description[
  **Kullanıcı İsmi:** $userInfo[username;$mentioned[1]]
  **Kullanıcı Etiketi:** #$userInfo[discriminator;$mentioned[1]]
  **Kullanıcı ID:** $mentioned[1]
  **Kayıt Tarihi:** $creationDate[$mentioned[1]]
  **Davet Sayısı:** $userInfo[total;$mentioned[1]]
  ]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  
  `
}