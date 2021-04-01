let handler = async m => m.reply(`
✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*

Comandos del STAFF, abusar de estos se te removerá el rango!

- /approve link
*Aprobar una solicitud de grupo*

- /mcf confesión
*Aprobar una confesión, debes pegar el texto*

- /msm número|texto
*Enviar un aviso o comunicado a un usuario como de baneo*

- /msupp número|texto
*Responder una duda enviada por soporte*

- /ban número
*Banear un usuario, luego de hacerlo le comunicas con /msm*

- /unban número
*Desbanear un usuario*

- /leave
*Sacar el bot de un grupo*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(moderador)$/i
handler.mods = true
handler.register = true

module.exports = handler
