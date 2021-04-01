const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, 'Visite (https://gastonvainstein.online) para aprender a usar el bot y conocer todos los comandos', MessageType.text, {
     quoted: {
        key: {
          fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {
            remoteJid: "status@broadcast"
          } : {})
        }, message: {
          "imageMessage": {
            "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./logob.jpg'), "caption": "𝑫𝒆𝒗: 𝑯𝒂𝒊𝒏𝒋𝒌𝒖 | Instɑ: @gɑstonvɑinstein"
          }
        }
      }
    })
    conn.sendMessage(m.chat, fs.readFileSync('database/datavoice/yo.mp4'), MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m })
}

handler.customPrefix = /^(hola bot|holi bot|bot|hainjku bot|halo bot|hi bot)$/i
handler.command = new RegExp

handler.fail = null
handler.exp = 25
handler.register = true

module.exports = handler
