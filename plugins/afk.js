let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
🕐 AFK

Ahora estás ausente hasta que vuelvas a enviar un nuevo mensaje, cuando te intenten tagear el usuario será notiicado de tu ausencia con el motivo.

*Usuario:* ${conn.getName(m.sender)}
*Motivo:* ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = true

module.exports = handler
