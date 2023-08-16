module.exports = {
  name: "aşk-ölçer",
  code: `
  $title[Aşk Ölçer]
  $image[https://agg-api.vercel.app/ship?avatar1=$userAvatar[$authorID]?size=2048&avatar2=$userAvatar[$mentioned[1]]?size=2048&background=https://images-ext-2.discordapp.net/external/h2V0tGlWX5t8hGkm0zBYH2_YEIWuco1Tc_lpZLhxg5s/https/cdn.discordapp.com/icons/1121851906155880548/8ffd9fc35a791cca9e08eb828e1bb4ff.png&number=$random[0;100]]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$mentioned[1]!=$authorID;Kendinle kendinin aşkını ölçecek kadar salak değilim sevgili <@$authorID>]
  $onlyIf[$isBot[$mentioned[1]]!=;Niye bir botla aşkını ölçmeye çalışıyorsun?]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}