const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    let iya = `ā³ š·šššššš į“®į“¼įµ | *STAFF*\n\nPara enviar un mensaje a un usuario escribe */sm (nĆŗmero|mensaje)*\n\n_Ejemplo: ${usedPrefix}sm 59898310750|hola_`
    let [n, mes] = text.split('|')
    try {
        if (!n) throw iya
        if (n.startsWith('08')) throw iya
        if (!mes) throw iya
        if (mes.length > 200) throw 'MĆ”ximo 200 caracteres!'
        if (mes) {
            let n1 = n.replace('-', '')
            let n2 = n1.replace('+', '')
            let n3 = n2.replace(' ', '')
            console.log(m)
            no = m.sender.split("@s.whatsapp.net")
            let teks = `ā³ š·šššššš į“®į“¼įµ | *STAFF*\n\nTienes un nuevo mensaje por parte del equipo de administraciĆ³n del bot, por favor lĆ©elo!\n\nš *Mensaje:* ${mes}`
            conn.sendMessage(`${n3}@s.whatsapp.net`, teks, MessageType.text, {
                contextInfo: {
                    mentionedJid: [m.sender]
                }
            }
            )
            m.reply('ā³ š·šššššš į“®į“¼įµ | *STAFF*\n\nMensaje enviado exitosamente al usuario seleccionado.')
        } else throw iya
    } catch (e) {
        console.log(e)
        throw iya
    }
}
handler.help = ['pesan nomor | teks']
handler.tags = ['tools']
handler.command = /^(msm|mstaffmsg)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

module.exports = handler
