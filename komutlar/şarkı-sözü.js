module.exports = {
  name: "şarkı-sözü",
  code: `
  $title[$jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+;1];title;Bulunamadı]]
  $description[
  **Sanatçı:** $jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+;1];artist;Bulunamadı]

  **Sözler:**
  $jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+;1];lyrics;Bulunamadı]
  ]
  $thumbnail[$jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+;1];image;Bulunamadı]]
  $footer[$username tarafından]
  $addTimestamp
  `
}