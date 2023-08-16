module.exports = {
  name: "notlarım",
  code: `
  $title[Notlarınız]
  $description[
  **Notunuz:** $getGlobalUserVar[not;$authorID]
  
  Notunuzu düzenlemek için **$getGuildVar[prefix]not-düzenle <yeni not>** kodunu kullanabilirsiniz.
  ]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  
  `
}