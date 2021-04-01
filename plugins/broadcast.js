let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | STAFF')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `📣 *DIFUSIÓN*\n\n_Mensajes de difusión enviados a ${chats.length} chats_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
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

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
