module.exports = {
  name: "sunucu-tanıt",
  code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Sunucunuz Tanıtıldı}{description:
  Sunucunuz başarıyla botun destek sunucusunda tanıtıldı!

  [**Görmek İçin Tıkla!**](https://discord.com/channels/1138750555259424768/1140981782230094006)

  Tekrar sunucunuzu tanıtmak için **5 saat** boyunca beklemelisiniz.
  }{footer:$username:$authorAvatar}{timestamp:ms}{thumbnail:$guildIcon}}]

  $useChannel[1140981782230094006]
  $title[$guildName[$guildID]]
  $description[
  s!sunucu-tanıt komutuyla tanıtıldı.

  **Üye Sayısı:** $membersCount

  **Sunucu Sahibi:** <@$ownerID[$guildID]>

  **Tanıtan:** <@$authorID>

  [**Sunucuya Gir**]($getGuildInvite)
  ]
  $thumbnail[$guildIcon[$guildID]]
  `
}