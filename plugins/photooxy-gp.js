const axios = require('axios')
let fetch = require('node-fetch')
const bent = require('bent')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (text) {
        try {
            let res = await fetch(global.API('vinz', '/api/gplaybutton', { text: text }, 'apikey'))
            let img = await res.buffer()
            conn.sendMessage(m.chat, img, MessageType.image, {
                quoted: m, caption: '✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *PHOTOOXY*\n\nSe ha creado correctamente el texto, no olvides seguir al creador del bot en instagram\n(https://instagram.com/gastonvainstein)'
            })
        } catch (e) {
            throw '_En mantenimiento!_'
        }
    } else throw `contoh: \n\n${usedPrefix}gplay ariffb`
}
handler.help = ['goldplay <teks>']
handler.tags = ['creator']
handler.command = /^(g(old)?play)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
// handler.maintenance = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const gp = async (nama) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${nama}&apikey=apivinz`)
        .then((res) => {
            resolve(res.data.result)
        })
        .catch((err) => {
            reject(err)
        })
})
