let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *STAFF*\n\nReiniciando bot..., por favor espere aproximadamente 1 minuto.')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Not working)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
