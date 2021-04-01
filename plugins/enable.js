let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'antidelete':
      chat.delete = !isEnable
      break
    case 'public':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return m.reply(`
✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*

*Lista de opciones:*
welcome | delete | public | antilink | autolevelup

*Ejemplo:*
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*

*${type}* ha sido *${isEnable ? 'activado' : 'desactivado'}* ${isAll ? 'globalmente' : isUser ? '' : 'en usuarios'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
handler.register = true

module.exports = handler
