module.exports = {
  name: "premium-al",
  code: `
  $title[Premium Alındı]
  $description[<a:Green_Verification:1141043127864524871> <@$mentioned[1]> kullanıcısından başarıyla premium alındı!]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $setGlobalUserVar[premium;yok;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[premium;$mentioned[1]]!=yok;**Bu kullanıcıda zaten premium yok!**]
  $onlyForIDs[1129725824405348412;**Sahibim Değilsin!**]
  `
}