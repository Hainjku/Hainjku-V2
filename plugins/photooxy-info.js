let handler = async m => m.reply(`
✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*

Nuevo! Puedes crear tu propio logo con tu nombre 3D y 2D, utiliza uno de los siguientes comandos.

- /text3dbox Tunombre
- /blackpink Tunombre
- /bneon Tunombre
- /neonlight Tunombre
- /matrix Tunombre
- /logoph Tunombre|Apellido
- /quotemaker Tunombre
- /sandw Tunombre
- /silverplay Tunombre
- /watercolor Tunombre
- /wolflogo Tunombre



*También en el grupo oficial*
(https://chat.whatsapp.com/JDrnUNAs0yn0WCBJDoNPnl)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(texto3d|logo|banner)$/i
handler.register = true

module.exports = handler
