const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `📜 *DUEÑO*\n\nUn nuevo usuario te envió un mensaje\n\n*De:* *http://wa.me/+${no}*\n*Mensaje:* ${text}\n`
            conn.sendMessage('59898310750@s.whatsapp.net', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, '📜 *DUEÑO*\n\n_Has enviado un mensaje al dueño del bot, ten cuidadolo que pones :v_', m)
          } else conn.reply(m.chat, '📜 *DUEÑO*\n\n_Por favor escribe un mensaje para que el dueño lo vea_', m)
      } catch (err) {
          console.log(err)
      }
  }
handler.help = ['msg hainjku <mensaje>']
handler.tags = ['info']
handler.command = /^msg$/i
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
