module.exports = {
  name: "premium-ver",
  code: `
  $title[Premium Verildi]
  $description[ <a:Green_Verification:1141043127864524871> <@$mentioned[1]> kullanıcısına başarıyla premium verildi!]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $setGlobalUserVar[premium;var;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[premium;$mentioned[1]]!=var;**Bu kullanıcıda zaten premium var!**]
  $onlyForIDs[1129725824405348412;**Sahibim Değilsin!**]
  `
}