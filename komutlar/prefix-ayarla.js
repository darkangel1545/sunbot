module.exports = {
  name: "prefix-ayarla",
  code: `
  $title[Prefix Ayarlandı]
  $description[<a:Green_Verification:1141043127864524871> Sunucuya Özel Prefix **$message** Olarak Ayarlandı!]
  $thumbnail[$authorAvatar]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $setGuildVar[prefix;$message]
  $onlyIf[$getGlobalUserVar[premium;$authorID]!=yok;**Bu komutu kullanabilmek için premium üye olmalısın!**]
  `
}