module.exports = {
  name: "kara-liste ekle",
  code: `
  $title[Kara Listeye Bir Üye Eklendi!]
  $description[**$username[$message[1]]** isimli kullanıcı başarıyla kara listeye eklendi!]
  $thumbnail[$userAvatar[$message[1]]]
  $setGlobalUserVar[karaliste;var;$message[1]]
  $onlyForIDs[1129725824405348412;889534707694448650;Sahibim Değilsin]
  `
}