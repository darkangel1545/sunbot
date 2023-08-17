module.exports = {
  name: "sunucu-panel",
  $if: "old",
  code: `
  $if[$message==kur]
  $createChannel[$guildID;Üye Sayısı: $membersCount;Voice;false]
  $createChannel[$guildID;Bot Sayısı: $guildBotCount[$guildID];Voice;false]
  $createChannel[$guildID;Metin Kanalı Sayısı: $channelCount[$guildID;Text];Voice;false]
    $createChannel[$guildID;Ses Kanalı Sayısı: $channelCount[$guildID;Voice];Voice;false]
    $dm[$authorID]
    $title[Sunucu Panel Kuruldu]
    $description[**\`$guildName[$guildID]\` isimli sunucuda sunucu paneli başarıyla kuruldu!**]
    $thumbnail[$guildIcon[$guildID]]
    $elseif[$message==sıfırla]
    $deleteChannel[$channelID[Üye Sayısı: $membersCount]]
    $deleteChannel[$channelID[Bot Sayısı: $guildBotCount[$guildID]]]
    $deleteChannel[$channelID[Metin Kanalı Sayısı: $channelCount[$guildID;Text]]]
    $deleteChannel[$channelID[Ses Kanalı Sayısı: $channelCount[$guildID;Voice]]]
    $endelseif
  $endif
  $onlyIf[$message!=;**Bir işlem belirtmelisin! Örneğin \`$getGuildVar[prefix]sunucu-panel kur\` yazabilirsin.**]
  `
}