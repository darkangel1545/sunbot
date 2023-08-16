module.exports = {
  name: "sa",
  aliases: ["selam","selamun aleyküm","selamun aleykum","sea"],
  nonPrefixed: true,
  code: `
  <@$authorID>, $getGuildVar[saas]
 $onlyIf[$getGuildVar[saas]!=;]
 $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  `
}