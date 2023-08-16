module.exports = {
  name: "yetkili",
  code: `
  $title[SunBot Yetkili]
  $description[
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]ban**
  Etiketlediğiniz kullanıcıyı sunucudan banlar.
  **Kullanım:** $getGuildVar[prefix]ban <kişi>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]ban-sayı**
  Etiketlediğiniz kullanıcının banladığı kişi sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]ban-sayı <kişi>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]uyar**
  Etiketlediğiniz kullanıcıyı belirttiğiniz nedenle uyarır.
  **Kullanım:** $getGuildVar[prefix]uyar <kişi> <sebep>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]uyarı-say**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]uyarı-say <kişi>

 <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sa-as**
  Etiketlediğiniz kullanıcının uyarı alma sayısını gösterir.
  **Kullanım:** $getGuildVar[prefix]sa-as <aç veya kapat>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]hgbb**
  Giriş çıkış sistemini ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]hgbb <aç veya kapat>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sunucu-bilgi**
  Sunucu hakkındaki bilgileri gösterir.
  **Kullanım:** $getGuildVar[prefix]sunucu-bilgi

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]sunucu-tanıt**
  Sunucunuzu botun destek sunucusunda tanıtır.
  **Kullanım:** $getGuildVar[prefix]sunucu-tanıt

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]duyuru-kanal-ayarla**
  Duyuru kanalını ayarlamanızı sağlar.
  **Kullanım:** $getGuildVar[prefix]duyuru-kanal-ayarla <kanal>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]duyuru-yap**
  Duyuru kanalında yazdığınız duyuruyu yapar.
  **Kullanım:** $getGuildVar[prefix]duyuru-yap <duyuru>
  ]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}