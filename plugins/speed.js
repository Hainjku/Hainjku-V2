let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *SPEED*\n\n_Testeando velocidad..._')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
handler.register = true
module.exports = handler
