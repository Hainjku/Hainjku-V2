let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *GRUPO*\n\nEl enlace es inválido dos posibles problemas, se reseteó el enlace o el bot fue eliminado del grupo.'
    let res = await conn.acceptInvite(code)
    m.reply(`✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *GRUPO*\n\nSolicitud aprobada ✅ \n\n*Grupo:* ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^mapprove$/i

handler.prems = false
handler.mods = true
handler.register = true


module.exports = handler
