// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { text, usedPrefix }) => {
    goblok = `馃埊 *TRADUCTOR*\n\nEjemplo: ${usedPrefix}tr c贸digo de idioma|texto a traducir\n${usedPrefix}tr es|thankyou\n\nVer los c贸digos de idiomas en: https://cloud.google.com/translate/docs/language`
    if (!text) throw goblok

    let [to, trans] = text.split`|`

    if (!to) throw `馃埊 *TRADUCTOR*\n\nPor favor ingrese el c贸digo de idioma\ncontoh: \n\n${usedPrefix}tr id|thankyou\n\nBahasa yang didukung: https://cloud.google.com/translate/docs/language`
    if (!trans) throw `馃埊 *TRADUCTOR*\n\nPor favor ingrese la oraci贸n que desea traducir.\nEjemplo: \n\n${usedPrefix}tr es|thankyou`

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`馃埊 *TRADUCTOR*\n\n*Mensaje:* ${trans}\n\n*Traducci贸n:* ${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw goblok
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
