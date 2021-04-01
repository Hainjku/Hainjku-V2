const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '👑 *PREMIUM*\n\nTagea el que lo recibirá!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`👑 *PREMIUM*\n\n*Usuario:* Agregado ✅\n*Número:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira:* 30 Días\n\n_*Gracias por agregar un Premium!*_`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true
handler.register = true

module.exports = handler
