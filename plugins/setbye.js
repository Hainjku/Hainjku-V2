let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*\n\nPara argegar un mensaje de adiós utiliza la variable para mencionar\n@user (Mención)')
  } else throw '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*\n\nDonde esta el texto?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']
handler.admin = true
handler.botAdmin = true
handler.register = true

handler.command = /^setbye$/i
module.exports = handler
