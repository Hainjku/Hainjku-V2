let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(frases|frase)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "En la vida algunas veces se gana, otras veces se aprende.",
  "No midas tu riqueza por el dinero que tienes, mídela por aquellas cosas que tienes y que no cambiarías por dinero.",
  "Pedir perdón es de inteligentes, perdonar es de nobles y perdonarse es de sabios.",
  "Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste.",
  "El que busca un amigo sin defectos se queda sin amigos.",
  "La sonrisa cuesta menos que la electricidad y da más luz.",
  "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
  "A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar sería mucho menos si le faltara una gota.",
  "Cuando un tonto coge un camino, el camino se acaba y el tonto sigue.",
  "La reflexión es el camino hacia la inmortalidad; la falta de reflexión.",
  "La ocasión hay que crearla, no esperar a que llegue.",
  "Los sabios son los que buscan la sabiduría; los necios piensan haberla encontrado.",
  "No es pobre el que tiene poco, sino el que mucho desea.",
  "Un hombre que no se alimenta de sus sueños envejece pronto.",
  " Si no recuerdas la más ligera locura en que el amor te hizo caer, no has amado.",
  "Cuando el sabio señala la luna, el tonto se fija en el dedo.",
  "El dolor es inevitable pero el sufrimiento es opcional.",
  "Se puede matar al soñador, pero no al sueño.",
  "Quien tiene paciencia, obtendrá lo que desea."
]
