let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `contoh: \n\n${usedPrefix}logoph astro|bot\n\ngunakan tanda | sebagai pemisah`

    let [l, r] = text.split`|`

    if (!l) return conn.reply(m.chat, `Silahkan masukan parameter text1\n\ncontoh: *${usedPrefix}logoph astro|bot*`, m)
    if (!r) return conn.reply(m.chat, `Silahkan masukan parameter text2\n\ncontoh: *${usedPrefix}logoph astro|bot*`, m)

    if (l > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
    if (r > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
    try {
        let link = 'https://naufalhoster.xyz/textmaker/pornhub?apikey=astrobot&text1=' + l + '&text2=' + r
        conn.sendFile(m.chat, link, 'image.jpg', '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*\n\nSe ha creado correctamente el texto, no olvides seguir al creador del bot en instagram\n(https://instagram.com/gastonvainstein)')
    } catch (e) {
        throw '_En mantenimiento!_'
    }

}
handler.help = ['logopornhub'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(logoporn(hub)?|logoph)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.limit = true

handler.fail = null

module.exports = handler
