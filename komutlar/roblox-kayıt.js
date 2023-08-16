module.exports = {
  name: "roblox-kayıt",
  code: `
  $title[Roblox Kaydınız Tamamlandı]
  $description[<a:Green_Verification:1141043127864524871> **Roblox kaydınız başarıyla tamamlandı!**

  **Roblox İsminiz:** $jsonRequest[https://users.roblox.com/v1/users/$message;name;Bulunamadı]
  ]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $setGlobalUserVar[robloxid;$jsonRequest[https://users.roblox.com/v1/users/$message;id;Bulunamadı];$authorID]
  $onlyIf[$jsonRequest[https://users.roblox.com/v1/users/$message;name;Bulunamadı]!=;**Geçersiz ID!**]
$onlyIf[$message!=;**Lütfen Roblox ID' nizi girin!**]
  `
}