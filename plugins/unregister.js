const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *UNREGISTER*\n\nEl nรบmero de serie estรก en blanco'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *UNREGISTER*\n\nNรบmero de serie incorrecto'
  user.registered = false
  m.reply(`โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *UNREGISTER*\n\nUnregistrado exitosamente!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler
