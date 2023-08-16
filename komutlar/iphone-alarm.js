module.exports = {
  name: "iphone-alarm",
  code: `
  $image[https://api.popcat.xyz/alert?text=$replaceText[$message; ;+;1]]
  `
}