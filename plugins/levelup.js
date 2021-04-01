let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
⤴ *LEVELUP*

Level *${user.level} (${user.exp - min}/${xp})*
Se ha descontado *${max - user.exp}* nuevamente!
`.trim()
  }
  user.level++
  m.reply(`
⤴ *LEVELUP*

¡Felicitaciones, has subido de nivel!
*${user.level - 1}* ↣ *${user.level}*
  `.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i
handler.register = true

module.exports = handler
