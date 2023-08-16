module.exports = {
  name: "roblox-profil",
  code: `
  $title[$jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];name;Bulunamadı]]
  $description[
  **Kullanıcı İsmi:** $jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];name;Bulunamadı]

  **Display Name:** $jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];displayName;Bulunamadı]

  **Kullanıcı ID:** $jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];id;Bulunamadı]

  **Açıklaması:** $jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];description;Bulunamadı]

  **Kayıt Tarihi:** $jsonRequest[https://users.roblox.com/v1/users/$getGlobalUserVar[robloxid;$mentioned[1]];created;Bulunamadı]
  ]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[robloxid;$mentioned[1]]!=;**Bu kullanıcı henüz roblox üzerinden kayıt olmamış!**]
  `
}