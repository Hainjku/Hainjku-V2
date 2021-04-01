// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan laporan', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!', m)
    const laporan = `*「 GRUPO 」*\n\nNueva solicitud para agregar el bot al grupo espera aprobación\n\n*Solicitante:* wa.me/${m.sender.split`@`[0]}\n*Grupo:* ${text}\n\n_Para aprobar usa /approve (link)_`
    for (let jid of global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    conn.reply(m.chat, '⌛Tu solicitud para agregar el bot a un grupo está en espera de aprobación por un administrador!⌛', m)
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(join000000|agregar0000)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
