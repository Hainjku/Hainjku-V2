const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `馃摐 *CONFESI脫N!*\n\nUn nuevo usuario realiz贸 una confesi贸n, y require aprobaci贸n (El usuario no sabe que su confesi贸n est谩 siendo revisada)\n\n*De:* *http://wa.me/+${no}*\n*Confesi贸n:* ${text}\n`
            conn.sendMessage('59898310750-1617043441@g.us', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, '馃摐 *CONFESI脫N!*\n\n_Has enviado una nueva confesi贸n, si demora en enviarse espera a que se env铆e la confesi贸n de otra persona_\n\nConfesi贸n enviada a\n*Grupos:* 873\n*Chats:* 9.180', m)
          } else conn.reply(m.chat, '馃摐 *CONFESI脫N!*\n\nPor favor escribe una confesi贸n, esta ser谩 enviada a todos los grupos del bot y chats', m)
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
