module.exports = {
  name: "sa-as aç",
  code: `
  $title[Sa-As Sistemi Açıldı]
  $description[<a:Green_Verification:1141043127864524871> Artık biri sa yazdığında bot cevap verecek!]
  $setGuildVar[saas;Aleykümselam, hoşgeldin.]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  $onlyIf[$getGuildVar[saas]!=Aleykümselam, hoşgeldin.;Sa-As Sistemi Zaten Açık!]
  
  `
}