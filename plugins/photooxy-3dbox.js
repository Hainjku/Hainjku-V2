const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.zeks.xyz/api/text3dbox?text=' + encodeURIComponent(text) + '&apikey=apivinz')
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*\n\nSe ha creado correctamente el texto, no olvides seguir al creador del bot en instagram\n(https://instagram.com/gastonvainstein)'
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `contoh: \n\n${usedPrefix}t3dbox ariffb`
}
handler.help = ['text3d <texto>']
handler.tags = ['tools']
handler.command = /^(t(ext)?3dbox)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.register = true
// handler.maintenance = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
