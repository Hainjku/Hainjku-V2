let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
❓ *PREGUNTAS*

*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['Si','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
`.trim(), m)
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
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
