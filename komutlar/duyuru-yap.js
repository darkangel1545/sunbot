module.exports = {
  name: "duyuru-yap",
  code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Duyuru Gönderildi}{description:Duyurunuz başarıyla <#$getGuildVar[duyurukanal]> kanalına gönderildi!}{footer:$username tarafından}{timestamp:ms}{thumbnail:$authorAvatar}}]
  $useChannel[$getGuildVar[duyurukanal]]
  $title[Yeni Duyuru]
  $description[
  **Duyuru İçeriği:** $message

  **Duyuruyu Yapan:** <@$authorID>
  ]
  $thumbnail[$authorAvatar]
  ||@everyone|| & ||@here||
  $onlyIf[$getGuildVar[duyurukanal]!=;**Duyuru kanalı ayarlanmamış! Ayarlamak için \`s!duyuru-kanal-ayarla <kanal>\` komutunu kullanabilirsin.**]
  `
}