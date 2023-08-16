module.exports = {
  name: "dil-ayarla",
  $if: "old",
  code: `
  $if[$message==Türkçe]
  $title[Dil Değiştirildi]
  $description[<a:Green_Verification:1141043127864524871> **Botun dili başarıyla \`Türkçe\` olarak ayarlandı!**]
  $thumbnail[$authorAvatar]
  $setGuildVar[dil;tr]
  $endif
  
    $if[$message==İngilizce]
  $title[Dil Değiştirildi]
  $description[<a:Green_Verification:1141043127864524871> **Botun dili başarıyla \`İngilizce\` olarak ayarlandı!**]
  $thumbnail[$authorAvatar]
  $setGuildVar[dil;eng]
  $endif
  
  $onlyIf[$message!=;**Lütfen değiştirilecek dili girin!**]
  $onlyPerms[administrator;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!]
  `
}