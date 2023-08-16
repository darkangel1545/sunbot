module.exports = {
  name: "hapis",
  code: `
  $image[https://api.popcat.xyz/jail?image=$userAvatar[$mentioned[1]]]
  $footer[$username tarafından]
  $addTimestamp
  `
}