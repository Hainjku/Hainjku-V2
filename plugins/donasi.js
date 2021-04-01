let handler = async m => m.reply(`
💎 *DONAR*

_No necesitamos donaciones pero puedes ayudarnos compartiendo el bot o agregando el bot a un grupo más info o siguiendo al dueño del bot en instagram @gastonvainstein_
(https://gastonvainstein.online)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si|r)$/i
handler.register = true

module.exports = handler
