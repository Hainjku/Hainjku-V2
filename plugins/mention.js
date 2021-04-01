let handler = async (m, { conn, text }) => {
  if (!text) throw '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *MENTION*\n\nEl texto?'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i
handler.register = true

module.exports = handler
