const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *Rᴇɢɪsᴛʀᴏ*\n\nYa estás registrado\nQuiere volver a registrarse? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *Rᴇɢɪsᴛʀᴏ*\n\nFormato incorrecto\n*${usedPrefix}register <nombre>.edad>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *Rᴇɢɪsᴛʀᴏ*\n\nEl nombre no puede estar vacío (Alphanumerico)'
  if (!age) throw '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *Rᴇɢɪsᴛʀᴏ*\n\nLa edad no puede estar vacía (Números)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
¡Registro exitoso! ✅

┏━━━━❉ Rᴇɢɪsᴛʀᴏ ❉━━━━┓
┣⊱ Nᴏᴍʙʀᴇ: ${name}
┣⊱ Eᴅᴀᴅ: ${age} ᴀɴ̃ᴏs
┣⊱ SN: ${sn}
┣━━━━━━━━━━━━
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
