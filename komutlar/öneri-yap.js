module.exports = {
  name: "öneri-yap",
  code: `
  $channelSendMessage[$channelID;Öneriniz başarıyla botun sahibine gönderildi!]
  $dm[1129725824405348412]
  $title[SunBot Önerisi]
  $description[
  **Öneri Mesajı:** $message
  **Sunucu Linki:** $getGuildInvite
  **Gönderen:** $username[$authorID]
  ]
  $thumbnail[$userAvatar[$authorID]]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}