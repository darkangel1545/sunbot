module.exports = {
  name: "dm-gönder",
   aliases: ["mesaj-gönder"],
  code: `
  $channelSendMessage[$channelID;**$username[$mentioned[1]]** kullanıcısına yazdığınız mesaj başarıyla gönderildi!]
  $dm[$mentioned[1]]
  $title[Yeni Mesajınız Var!]
  $description[**Mesajınız:** $noMentionMessage
  
  **Gönderen:** <@$authorID>
  ]
  $thumbnail[$authorAvatar]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}