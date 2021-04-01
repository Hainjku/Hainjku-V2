let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '⛔ *BAN USER*\n\nPor favor ingresa el número completo de la persona que será baneada\n\n_Ejemplo: /ban 59898310750_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '⛔ *BAN USER*\n\nPor favor tagea la persona que será baneada'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `⛔ *BAN USER*\n\nUsuario baneado`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true
handler.register = true

module.exports = handler
