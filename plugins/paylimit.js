let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw '💰 *BANCO*\n\nIngrese el número de coins que se darán'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '💰 *BANCO*\n\nEtiqueta el que recibirá'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '💰 *BANCO*\n\nSolo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw '💰 *BANCO*\n\nError! El mínimo de coins para transferir es 1'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw '💰 *BANCO*\n\nCoin(s) insuficientes para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`💰 *BANCO*\n\nTransferencia de coin(s) relizada exitosamente\n*Pagado:* ${-poin} coin(s)\n*Impuesto:* ${-pjk} (2%)\n*Total =* ${-limit} coin(s)`)
    conn.fakeReply(m.chat, `💰 *BANCO*\n\n+${poin} coins`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^paylimit$/
handler.rowner = false
handler.register = true

module.exports = handler
