let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *BOT*\n\nยฟPor quรฉ no vas directo a la terminal?', m)
  else {
    await conn.reply(m.chat, 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *BOT*\n\nAdiรณs bot:\')', m)
    conn.close()
  }
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
