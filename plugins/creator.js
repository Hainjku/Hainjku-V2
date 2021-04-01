let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '0', '59898310750', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner000|creator000)$/i
handler.register = true

module.exports = handler
