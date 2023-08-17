module.exports = {
  name: "bildir",
  code: `
  $channelSendMessage[$channelID;**Geri bildiriminiz başarıyla bot sahibine gönderildi!**]
  $dm[1129725824405348412]
  $title[Geri Bildirim]
  $description[
  **Geri Bildirim Mesajı:** $message
  
  **Sunucu Linki:** $getGuildInvite
  
  **Gönderen:** $username
  ]
  $thumbnail[$authorAvatar]
  $onlyIf[$message!=;**]
  `
}