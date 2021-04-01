let handler = async m => m.reply(`
👑 *PREMIUM

Con este rango obtendrás los siguientes beneficios que te harán destacar sobre los demás.

- Coins infinitos
- Claimeo de 1.5k XP a día
- Confesiones infinitas
- Xp infinito
- Prioridad en soporte
- Y mucho más!

Solicita este beneficio con el comando
*/soporte Quiero premium*

*También en el grupo oficial*
(https://chat.whatsapp.com/JDrnUNAs0yn0WCBJDoNPnl)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(premium|vip|prem|rango|beneficios)$/i
handler.register = true

module.exports = handler
