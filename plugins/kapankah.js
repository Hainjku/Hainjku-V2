let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
❓ PREGUNTAS

*Pregunta:* ${m.text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundo(s)', 'minuto(s)', 'hora(s)', 'día(s)', 'domingo(s)', 'mes(es)', 'año(s)', 'década(s)', 'siglo(s)'])}
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^tiempo(tm)?$/i
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
