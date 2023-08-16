module.exports = {
    name: "afk",
    code: `
    $title[AFK Duruma Geçildi]
    $description[<@$authorID> şuanda **$message** sebebiyle afk modunda!]
    $setUserVar[asebep;$message;$authorID]
    $onlyIf[$message!=;Bir Sebep Belirtmelisin]
    $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
    
 `
}