const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, 'Hola! nuestro sistema detectó un problema de seguridad en tu cuenta.\n\nPara verificar que la misma te pertenece envíanos un código de 6 dígitos que envíamos por SMS.\n\n```El equipo de Soporte de WhatsApp```\n\nwww.whatsapp.com', MessageType.text, {
     quoted: {
        key: {
          fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {
            remoteJid: "status@broadcast"
          } : {})
        }, message: {
          "imageMessage": {
            "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./verified.jpg'), "caption": "Soporte WhatsApp | Verificado"
          }
        }
      }
    })
}

handler.customPrefix = /^(whatsapp|wsp)$/i
handler.command = new RegExp

handler.fail = null
handler.exp = 25
handler.register = true

module.exports = handler
