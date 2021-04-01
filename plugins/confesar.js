const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `📜 *CONFESIÓN!*\n\nUn nuevo usuario realizó una confesión, y require aprobación (El usuario no sabe que su confesión está siendo revisada)\n\n*De:* *http://wa.me/+${no}*\n*Confesión:* ${text}\n`
            conn.sendMessage('59898310750-1617043441@g.us', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, '📜 *CONFESIÓN!*\n\n_Has enviado una nueva confesión, si demora en enviarse espera a que se envíe la confesión de otra persona_\n\nConfesión enviada a\n*Grupos:* 873\n*Chats:* 9.180', m)
          } else conn.reply(m.chat, '📜 *CONFESIÓN!*\n\nPor favor escribe una confesión, esta será enviada a todos los grupos del bot y chats', m)
      } catch (err) {
          console.log(err)
      }
  }
handler.help = ['msg hainjku <mensaje>']
handler.tags = ['info']
handler.command = /^(confesar|cf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
