let fs = require('fs')
let handler = async (m, { text, usedPrefix }) => {
    if (!text) throw `โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *GAY*\n\nEjemplo: \n\n${usedPrefix}howlesbian yo`
    const gay = JSON.parse(fs.readFileSync('./database/lesbian.json'));
    const random = Math.floor(Math.random() * gay.length)
    const res = gay[random]
    if (text) conn.fakeReply(m.chat, `${res.persen} Lesbiana!\n${res.pesan}`, '0@s.whatsapp.net', `*๐ท๐๐๐๐๐๐ แดฎแดผแต | Ig: @gastonvainstein*`, 'status@broadcast')
}
handler.help = ['howgay'].map(v => v + ' @user')
handler.tags = ['fun']
handler.command = /^(howlesbian|hlesbian)$/i
handler.limit = false
handler.register = true
module.exports = handler
