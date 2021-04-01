let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != conn.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) throw false
  conn.math = conn.math ? conn.math : {}
  if (!(id in conn.math)) throw '🔣 *MATEMÁTICAS*\n\nEsa pregunta ha terminado'
  if (m.quoted.id == conn.math[id][0].id) {
  let math = JSON.parse(JSON.stringify(conn.math[id][1]))
  if (m.text == math.result) {
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    throw `🔣 *MATEMÁTICAS*\n\n*Respuesta correcta!* ✅\n*Bonus:* +${math.bonus} XP`
  } else {
    if (--conn.math[id][2] == 0) {
      clearTimeout(conn.math[id][3])
      delete conn.math[id]
      throw `🔣 *MATEMÁTICAS*\n\n*Se acabaron tus oportunidades!*\nRespuesta: *${math.result}*`
    } else throw `🔣 *MATEMÁTICAS*\n\n*Respuesta incorrecta!* ❎\n*Tienes:* ${conn.math[id][2]} intentos`
  }
 }
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
handler.register = true

module.exports = handler
