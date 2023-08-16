module.exports = {
  name: "not-düzenle",
  code: `
  $title[Notunuz Güncellendi!]
  $description[
  <a:Green_Verification:1141043127864524871> Notunuz başarıyla güncellendi!
  ]
  $thumbnail[$authorAvatar]
  $setGlobalUserVar[not;$message;$authorID]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  
  `
}