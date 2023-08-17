module.exports = {
  name: "giriş-çıkış",
  $if: "old",
  code: `
  $if[$message==aç]
  $title[Giriş Çıkış Sistemi Açıldı]
  $description[<a:Green_Verification:1141043127864524871> **Giriş çıkış sistemi başarıyla açıldı!**
  
  **Ayarlanan Log Kanalı:** <#$mentionedChannels[1]>
  ]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $setGuildVar[giriscikis;$mentionedChannels[1]]
  $elseif[$message==kapat]
    $title[Giriş Çıkış Sistemi Kapatıldı]
  $description[<a:Green_Verification:1141043127864524871> **Giriş çıkış sistemi başarıyla kapatıldı!**
  ]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $setGuildVar[giriscikis;]
  $endelseif
  $endif
  `
}