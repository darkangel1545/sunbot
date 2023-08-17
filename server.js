const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.token,
    prefix: "$getGuildVar[prefix]",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});





const loader = new LoadCommands(bot);
loader.load(bot.cmd,"./komutlar/");

bot.readyCommand({
  channel: "",
  code: `
  $log[$username[$clientID] başarıyla aktif edildi!]
  `
})

bot.variables({
  lastchannel: "",
  saas: "",
  asebep: "",
  bansayı: "0",
  uyarısayı: "0",
  sonban: "",
  hgbb: "",
  not: "Not girilmemiş!",
  karaliste: "yok",
  linkengel: "kapalı",
  premium: "yok",
  prefix: "s!",
  disableon: "yok",
  duyurukanal: "",
  robloxid: "",
  dil: "tr",
  giriscikis: ""
})


bot.command({
  name: "ping",
  code: `
  $title[SunBot Ping Bilgileri]
  $description[
  **Pingim:** $pingms
  **Mesaj Pingim:** $messagePingms
  **Database Pingim:** $databasePingms
  ]
  $thumbnail[$authorAvatar]
  $footer[$username tarafından]
  $addTimestamp
  `,
});

bot.status({
  text: "Yardım almak için s!yardım yazabilirsin 😎",
  type: "WATCHING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "Eklenmesini istediğin özellik varsa s!öneri-yap <istek> komutunu kullanabilirsin!",
  type: "GAMING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "Bir sorun mu buldun? Hemen s!bildir <sorun> komutunu kullan!",
  type: "GAMING",
  status: "dnd"
})

bot.joinCommand({
  channel: "$getGuildVar[giriscikis]",
  code: `
  $title[Sunucuya Yeni Bir Üye Katıldı]
  $description[
  📥 **Sunucumuza hoşgeldin <@$authorID>!**
  
  **Senin sayende $membersCount üye olduk.**
  ]
  $thumbnail[$authorAvatar]
  `
})

bot.leaveCommand({
  channel: "$getGuildVar[giriscikis]",
  code: `
  $title[Sunucudan Bir Üye Ayrıldı]
  $description[
  📤 **Görüşürüz \`$username\`!**
  
  **Sensiz $membersCount kişi kaldık.**
  ]
  $thumbnail[$authorAvatar]
  `
})

bot.command({
  name: "$alwaysExecute",
  code: `
$description[<@$mentioned[1]> kullanıcısı **$getUserVar[asebep;$mentioned[1]]** sebebinden dolayı AFK.]

$onlyIf[$getUserVar[asebep;$mentioned[1]]!=;]
$onlyIf[$mentioned[1]!=$authorID;]   
`,
});
 bot.command({
  name: "$alwaysExecute",
  code: `
$description[<@$mentioned[1]> kullanıcısı geri döndü, artık AFK değil.]
$setUserVar[asebep;]

$onlyIf[$getUserVar[asebep;$authorID]!=;] 
`,
});

bot.command({
  name: "<@1138041811986812948>",
  nonPrefixed: true,
  code: `
  $title[SunBot Hakkında]
  $description[Aşağıdan SunBot hakkındaki bilgileri öğrenebilirsin.
  
  **Prefixim:** $getGuildVar[prefix]
  
  **ID:** $clientID
  
  **Sunucu Sayım:** $guildCount
  
  **Komut Sayım:** $commandsCount
  
  **Bot Sahibim:** <@1129725824405348412>
  ]
  $thumbnail[$userAvatar[$clientID]]
  $footer[$username;$authorAvatar]
  $addTimestamp
  `,
});

