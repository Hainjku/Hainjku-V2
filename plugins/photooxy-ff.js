const fetch = require('node-fetch')
const bent = require('bent')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text.length > 11) throw `Maksimal 11 karakter!`
    if (text) {
        try {
            let res = await fetch(global.API('vinz', '/api/epep', { text: text }, 'apikey'))
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, { quoted: m, mimetype: "image/jpeg", caption: '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*\n\nSe ha creado correctamente el texto, no olvides seguir al creador del bot en instagram\n(https://instagram.com/gastonvainstein)' })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `contoh: \n\n${usedPrefix}freefire ariffb`
}
handler.help = ['freefire <teks>']
handler.tags = ['creator']
handler.command = /^freefire$/i
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
