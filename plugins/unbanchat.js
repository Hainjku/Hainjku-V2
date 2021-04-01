let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('⛔ *BANCHAT*\n\nChat desbaneado exitosamente, los comandos aquí volvieron a funcionar!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true
handler.register = true

module.exports = handler
