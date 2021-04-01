let handler = async m => m.reply(`
💎 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ

El bot es de la comunidad, la cual defiende y mantiene el bot con su apoyo, la única forma de contactarte con el dueño del bot es por instagram:
(https://instagram.com/gastonvainstein)
@gastonvainstein

*Grupo del bot*
(https://chat.whatsapp.com/JDrnUNAs0yn0WCBJDoNPnl)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(dueño|creador|creator|owner|admin)$/i
handler.register = true

module.exports = handler
