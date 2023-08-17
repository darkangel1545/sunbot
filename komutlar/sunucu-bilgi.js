module.exports = {
  name: "sunucu-bilgi",
  code: `
  $title[$guildName[$guildID]]
  $addField[Kategori Sayısı;$channelCount[$guildID;Category];true]
   $addField[Ses Kanalı Sayısı;$channelCount[$guildID;Voice];true]
   $addField[Metin Kanalı Sayısı;$channelCount[$guildID;Text];true]
   $addField[Bot Sayısı;$guildBotCount;true]
    $addField[Üye Sayısı;$membersCount;true]
     $addField[Sunucu Sahibi;$username[$ownerID[$guildID]];true]
      $addField[Sunucu ID;$guildID;true]
 $addField[Sunucu İsmi;$guildName[$guildID];true]
  $thumbnail[$guildIcon]
  $footer[$username tarafından]
  $addTimestamp
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}