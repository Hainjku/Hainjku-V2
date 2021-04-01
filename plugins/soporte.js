const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `📩 *SOPORTE*\n\nUn nuevo usuario envió una solicitud o una duda\n\n*De:* *http://wa.me/+${no}*\n*Mensaje:* ${text}\n`
            conn.sendMessage('59898310750-1617043441@g.us', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, '📩 *SOPORTE*\n\nHas enviado una duda al soporte del bot, serás respondido en unos minutos.\n\n_Hacer spam y abusar de este comando es sancionable!_', m)
          } else conn.reply(m.chat, '📩 *SOPORTE*\n\nDebes ingresar un mensaje con la duda o ayuda que necesites', m)
      } catch (err) {
          console.log(err)
      }
  }
handler.help = ['msg hainjku <mensaje>']
handler.tags = ['info']
handler.command = /^(help|ayuda|soporte|support)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
