let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *STAFF*\n\nPara argegar un mensaje de adiรณs utiliza la variable para mencionar\n@user (Menciรณn)')
  } else throw 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *STAFF*\n\nDonde esta el texto?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']
handler.admin = true
handler.botAdmin = true
handler.register = true

handler.command = /^setbye$/i
module.exports = handler
