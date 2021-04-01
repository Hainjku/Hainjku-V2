let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
❓ *PREGUNTAS*

*Pregunta:* ${text}
*Respuesta:* ${pickRandom(['Si','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^(pr|pregunta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
