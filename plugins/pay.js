let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw '💰 *BANCO*\n\nIngrese la cantidad de exp que se dará'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '💰 *BANCO*\n\nTagea el que lo recibirá'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw '💰 *BANCO*\n\nSolo números'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw '💰 *BANCO*\n\nError! El mínimo de XP para transferir es 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw '💰 *BANCO*\n\nError! No hay suficiente XP en tu cuenta para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`💰 *BANCO*\n\nTransferencia de XP relizada exitosamente\n*Pagado:* ${-xp} XP\n*Impuesto:* ${-pjk} (2%) \n*Total =* ${-exp} XP`)
  conn.fakeReply(m.chat, `💰 *BANCO*\n\n+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <amount>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = true
handler.register = true

module.exports = handler
