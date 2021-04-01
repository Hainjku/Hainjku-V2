const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch('https://api.xteam.xyz/quotemaker?text=' + encodeURIComponent(text) + '&wm=Astrobot&APIKEY=astrobotapi')
            let img = await res.buffer()
            // if (!img) throw img
            // let stiker = await sticker(img)
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*\n\nSe ha creado correctamente el texto, no olvides seguir al creador del bot en instagram\n(https://instagram.com/gastonvainstein)'
            })
        } catch (e) {
            console.log(e)
            throw '_En mantenimiento!_'
        }
    } else throw `contoh: \n\n${usedPrefix}quotemaker ily nisa`
}
handler.help = ['quotemaker']
handler.tags = ['creator']
handler.command = /^quotemaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.maintenance = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
