let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *GRUPO*\n\nEl enlace es invรกlido dos posibles problemas, se reseteรณ el enlace o el bot fue eliminado del grupo.'
    let res = await conn.acceptInvite(code)
    m.reply(`โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *GRUPO*\n\nSolicitud aprobada โ \n\n*Grupo:* ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^mapprove$/i

handler.prems = false
handler.mods = true
handler.register = true


module.exports = handler
