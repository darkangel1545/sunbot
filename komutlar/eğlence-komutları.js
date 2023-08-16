module.exports = {
  name: "eğlence",
  code: `
  $title[SunBot Eğlence]
  $description[
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]aşk-ölçer**
  Etiketlenen kullanıcıyla olan aşkınızı ölçer.
  **Kullanım:** $getGuildVar[prefix]aşk-ölçer <kişi>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]silah-efekt**
  Etiketlediğiniz kullanıcının profil fotoğrafına silah yerleştirir.
  **Kullanım:** $getGuildVar[prefix]silah-efekt <kişi>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]hapis**
  Etiketlediğiniz kullanıcının profil fotoğrafına hapis efekti koyar.
  **Kullanım:** $getGuildVar[prefix]hapis <kişi>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]iphone-alarm**
  Yazdığınız yazıyı iphone alarmına çevirir.
  **Kullanım:** $getGuildVar[prefix]iphone-alarm <yazı>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]steam-oyun**
  Yazdığınız oyunun steamdaki bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]steam-oyun <oyun ismi>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]yılan-oyunu**
  Yılan oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]yılan-oyunu
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]mc-sunucu**
  Yazdığınız minecraft sunucusunun bilgilerini gösterir.
  **Kullanım:** $getGuildVar[prefix]mc-sunucu <server ip> <server port>
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]tic-tac-toe**
  Etiketlediğiniz kişiyle Tic Tac Toe oynarsınız.
  **Kullanım:** $getGuildVar[prefix]tic-tac-toe <kişi>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]mayın-tarlası**
  Mayın tarlası oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]mayın-tarlası

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]adam-asmaca**
  Adam asmaca oyunu oynarsınız.
  **Kullanım:** $getGuildVar[prefix]adam-asmaca

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]tkm**
  Taş kağıt makas oyunu başlatır.
  **Kullanım:** $getGuildVar[prefix]tkm <kişi>

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]şarkı-sözü**
  Yazdığınız şarkının sözlerini gösterir.
  **Kullanım:** $getGuildVar[prefix]şarkı-sözü <şarkı>
]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}