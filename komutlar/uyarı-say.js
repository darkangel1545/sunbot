module.exports = {
  name: "uyarı-say",
  code: `
  $title[$username[$mentioned[1]] isimli kullanıcının aldığı uyarı sayısı]
  $description[
  <@$mentioned[1]> isimli kullanıcının **$getUserVar[uyarısayı;$mentioned[1]]** tane aldığı uyarı var.]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}