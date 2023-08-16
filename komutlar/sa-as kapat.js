module.exports = {
  name: "sa-as kapat",
  code: `
  $title[Sa-As Sistemi Kapatıldı]
  $description[<a:Green_Verification:1141043127864524871> Artık biri sa yazdığında bot cevap vermeyecek!]
  $setGuildVar[saas;]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
   $onlyIf[$getGuildVar[saas]!=;Sa-As Sistemi Zaten Kapalı!]
  `
}