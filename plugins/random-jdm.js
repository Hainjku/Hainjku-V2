var fs = require('fs');

let handler = async (m, { conn }) => {
    const jdmjson = JSON.parse(fs.readFileSync('./database/jdm.json'));
    const random = Math.floor(Math.random() * jdmjson.length)
    const res = jdmjson[random]
    await conn.sendFile(m.chat, res.image, 'jdm.jpg', 'π«ππ: π―ππππππ | InstΙ: @gΙstonvΙinstein', m)
}
handler.help = ['jdm']
handler.tags = ['random']
handler.command = /^gaston$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
