module.exports = {
  name: "uyar",
  code: `
  $channelSendMessage[$channelID;**$username[$mentioned[1]]** isimli kullanıcı **$noMentionMessage** nedeniyle uyarıldı!]
  $dm[$mentioned[1]]
  $title[Uyarıldın!]
  $description[
  **$guildName[$guildID]** sunucusundan uyarıldın!

  **Uyarı Sebebi:** $noMentionMessage
  **Uyaran:** $username[$authorID]
  **Uyarı Sayın:** $getUserVar[uyarısayı;$mentioned[1]]
  ]
  $setUserVar[uyarısayı;$math[$getUserVar[uyarısayı;$mentioned[1]]+1];$mentioned[1]]
  $onlyPerms[administrator;Bu komutu kullanabilmek için **Yönetici** isimli yetkiye sahip olmalısın!]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}