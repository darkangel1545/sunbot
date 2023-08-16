module.exports = {
  name: "mc-sunucu",
  code: `
  $title[Minecraft Sunucu Bilgi]
  $description[
  **Sunucu IP:** $jsonRequest[https://tilki.dev/api/minecraft-sunucu-bilgi/$message[1]/$message[2];serverIp;Bulunamadı!]
  
  **Sunucu Port:** $jsonRequest[https://tilki.dev/api/minecraft-sunucu-bilgi/$message[1]/$message[2];serverPort;Bulunamadı!]
  
  **Online Oyuncu:** $jsonRequest[https://tilki.dev/api/minecraft-sunucu-bilgi/$message[1]/$message[2];onlinePlayers;Bulunamadı!]
  
  **Max Oyuncu:** $jsonRequest[https://tilki.dev/api/minecraft-sunucu-bilgi/$message[1]/$message[2];maxPlayers;Bulunamadı!]
  
  **Sunucu Durumu:** $jsonRequest[https://tilki.dev/api/minecraft-sunucu-bilgi/$message[1]/$message[2];version;Bulunamadı!]
  ]
  $thumbnail[https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $suppressErrors[**Bu Minecraft Sunucusu Bulunamadı!**]
  `
}