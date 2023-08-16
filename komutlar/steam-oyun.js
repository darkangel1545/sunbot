module.exports = {
  name: "steam-oyun",
  code: `
  $title[$jsonRequest[https://api.popcat.xyz/steam?q=$message;name]]
  $description[
  $jsonRequest[https://api.popcat.xyz/steam?q=$message;description]
  
  **Web Sitesi:** $jsonRequest[https://api.popcat.xyz/steam?q=$message;website]
  
  **Fiyatı:** $jsonRequest[https://api.popcat.xyz/steam?q=$message;price]
  ]
  $image[$jsonRequest[https://api.popcat.xyz/steam?q=$message;banner]]
  $thumbnail[$jsonRequest[https://api.popcat.xyz/steam?q=$message;thumbnail]]
  $footer[$username tarafından]
  $addTimestamp
  `
}