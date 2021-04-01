let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '• _*CONFESIÓN ANÓNIMA*_ •')
  for (let id of groups) conn.copyNForward(id, content)
  conn.reply(m.chat, `📢 *DIFUSIÓN (GRUPOS)*\n\n_Mensajes de difusión enviados a ${groups.length} grupos_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(mcf|mconfesar)$/i
handler.owner = false
handler.mods = true
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
