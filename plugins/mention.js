let handler = async (m, { conn, text }) => {
  if (!text) throw 'โณ ๐ท๐๐๐๐๐๐ แดฎแดผแต | *MENTION*\n\nEl texto?'
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
