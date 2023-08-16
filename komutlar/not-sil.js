module.exports = {
  name: "not-sil",
  code: `
  $title[Notunuz Silindi!]
  $description[<a:Green_Verification:1141043127864524871> Notunuz başarıyla silindi!]
  $thumbnail[$authorAvatar]
  $setGlobalUserVar[not;Not girilmemiş!;$authorID]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  
  `
}