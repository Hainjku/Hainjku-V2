const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*\n\nUn nuevo usuario envió una solicitud para unir el bot a un grupo\n\n*De:* *http://wa.me/+${no}*\n*Grupo:* ${text}\n`
            conn.sendMessage('59898310750-1617043441@g.us', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*\n\nSe ha enviado la solicitud en espera de aprobación para meter el BOT al grupo exitosamente. Si el grupo es porno, de explotación infantíl o el grupo está expuesto a ataques de binarios y problemas entre legiones, no será agregado!\n\n_Hacer spam y abusar de este comando es sancionable!_', m)
          } else conn.reply(m.chat, '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*\n\nPor favor ingresa el grupo al que se unirá el bot', m)
      } catch (err) {
          console.log(err)
      }
  }
handler.help = ['msg hainjku <mensaje>']
handler.tags = ['info']
handler.command = /^(join)$/i
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
