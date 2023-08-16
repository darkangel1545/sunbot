module.exports = [{
  name: "yardım",
  aliases: ["help"],
  code: `

  $title[SunBot Yardım]
  $description[
SunBot' un yardım menüsüne hoşgeldiniz. Aşağıdan kategorilere bakabilirsiniz.

**Komut Sayım =** $commandsCount

**Pingim =** $pingms
  
  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]eğlence**
   Eğlence komutlarını listeler.

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]yetkili**
   Yetkili komutlarını listeler.

  <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]kullanıcı**
   Kullanıcı komutlarını listeler.

   <a:blue_arrow_heart:1141037090667237447> **$getGuildVar[prefix]geliştirici**
   Geliştirici komutlarını listeler.

   
  ]
  $image[https://media.discordapp.net/attachments/1135525919444979765/1136754710863433930/standard_3.gif]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  $addButton[1;Güncellemeler;success;guncellemeler;no;]
  $addButton[1;Bot Hakkında;success;bothakkinda;no;]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
},{
  type: "interaction",
  prototype: "button",
  name: "guncellemeler",
  code: `
$interactionReply[;{newEmbed:{title:SunBot Güncellemeleri}{description:
**Taş Kağıt Makas Oyunu Eklendi.**

**Adam Asmaca Oyunu Eklendi.**

**Mayın Tarlası Oyunu Eklendi.**

**Müzik Sistemi Kaldırıldı.**

**Müzik Sistemi Eklendi.**

**Tic Tac Toe Oyunu Eklendi.**

**Yılan Oyunu Eklendi.**

**Premium Sistemi Eklendi.**

**Premium Özellikler Eklendi.**

**Not Tutma Sistemi Eklendi.**

**Bazı Sorunlar Giderildi.**
}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};;;everyone;true]
`
},
                {
  type: "interaction",
  prototype: "button",
  name: "bothakkinda",
  code: `
$interactionReply[;{newEmbed:{title:SunBot Hakkında}{description:
Aşağıdan SunBot hakkındaki bilgileri öğrenebilirsin.
  
  **Prefixim:** $getGuildVar[prefix]
  
  **ID:** $clientID
  
  **Sunucu Sayım:** $guildCount
  
  **Komut Sayım:** $commandsCount
  
  **Bot Sahibim:** <@1129725824405348412>

}{thumbnail:$userAvatar[$clientID]}{footer:$username:$authorAvatar}{timestamp:ms}};;;everyone;true]
`
} 
]