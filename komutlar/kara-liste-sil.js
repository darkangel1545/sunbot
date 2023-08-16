module.exports = {
  name: "kara-liste sil",
  code: `
  $title[Kara Listeden Bir Üye Silindi!]
  $description[**$username[$message[1]]** isimli kullanıcı başarıyla kara listeden silindi!]
  $thumbnail[$userAvatar[$message[1]]]
  $setGlobalUserVar[karaliste;yok;$message[1]]
  $onlyForIDs[1129725824405348412;889534707694448650;Sahibim Değilsin]
  `
}