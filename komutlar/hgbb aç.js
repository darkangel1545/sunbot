module.exports = {
  name: "hgbb aç",
  code: `
  $title[Hg Bb Sistemi Ayarlandı!]
  $description[<a:Green_Verification:1141043127864524871> Hg Bb kanalı <#$mentionedChannels[1]> olarak ayarlandı!]
  $setGuildVar[hgbb;$mentionedChannels[1]]
  $onlyPerms[administrator;Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!
  
  ]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}