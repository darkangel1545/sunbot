module.exports = {
  name: "duyuru-kanal-ayarla",
  code: `
  $title[Duyuru Kanalı Ayarlandı]
  $description[**Duyuru kanalı <#$mentionedChannels[1]> olarak ayarlandı!**]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $setGuildVar[duyurukanal;$mentionedChannels[1]]
  $onlyPerms[administrator;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!]
  `
}