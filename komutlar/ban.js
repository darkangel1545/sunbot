module.exports = {
  name: "ban",
  code: `
  $title[Bir Kullanıcı Banlandı!]
  $description[
  <a:Green_Verification:1141043127864524871> <@$authorID> **$username[$mentioned[1]]** isimli kullanıcıyı banladı ve **$getUserVar[bansayı;$authorID]** banı oldu.
  ]
  $ban[$guildID;$mentioned[1];0;$noMentionMessage]
  $setUserVar[bansayı;$math[$getUserVar[bansayı;$authorID]+1];$authorID]
  $setUserVar[sonban;$mentioned[1];$authorID]
  $onlyPerms[banmembers;Bu komutu kullanabilmek için **Üyeleri At** isimli yetkiye sahip olmalısın!]
  $onlyClientPerms[banmembers;Bana **Üyeleri At** yetkisi vermen lazım!]
  $onlyIf[$mentioned[1]!=$authorID;**Kendinizi banlayamazsınız!**]
  $onlyIf[$getGlobalUserVar[karaliste]!=var;Kara listedesin! Şuanda botun komutlarını kullanamazsın.]
  $suppressErrors[**Bir hata oluştu! Bu hatayı destek yetkililerimize bildirebilirsin.**]
  `
}