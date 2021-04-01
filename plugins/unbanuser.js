let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '⛔ *BANUSER*\n\nQuién quiere ser desbaneado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '⛔ *BANUSER*\n\nTagea el usuario que será desbaneado'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `⛔ *BANUSER*\n\nEl usuario seleccionado ha sido desbaneado exitosamente`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true
handler.register = true

module.exports = handler
