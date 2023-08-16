module.exports = {
  name: "hgbb kapat",
  code: `
  $title[Hg Bb Sistemi Kapatıldı!]
  $description[<a:Green_Verification:1141043127864524871> Hg Bb sistemi başarıyla kapatıldı!]
  $setGuildVar[hgbb;]
  $onlyPerms[administrator;Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!
  
  ]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}