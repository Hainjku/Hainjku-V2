let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    m.reply('💰 *BANCO*\n\nHas realizado un claimeo hoy, recuerda que solo puedes realizarlo 1 vez cada 24 horas.\n\n*Monto:* +500 XP\n*Próximo:* 24 horas')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('💰 *BANCO*\n\nSolo puedes realizar un claimeo cada 24 horas desde realizado el último.')
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
