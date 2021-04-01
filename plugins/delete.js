let handler = function (m) {
  if (!m.quoted) throw '⛔ *DELETE*\n\nResponde el mensaje del bot que quieres eliminar!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw '⛔ *DELETE*\n\nSolo se pueden eliminar mensajes enviados por el bot.'
  if (!isBaileys) throw '⛔ *DELETE*\n\nEl mensaje no fue enviado por un bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i
handler.register = true

module.exports = handler
