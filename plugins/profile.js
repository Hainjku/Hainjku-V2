let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━━━❉ 𝖯𝖱𝖮𝖥𝖨𝖫𝖤 ❉━━━━┓
┣⊱ Nᴏᴍʙʀᴇ: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n┣⊱ Iɴғᴏ ᴅᴇ ᴘᴇʀғɪʟ: ' + about : ''}
┣⊱ Nᴜ́ᴍᴇʀᴏ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┣⊱ Lɪɴᴋ: https://wa.me/${who.split`@`[0]}${registered ? '\n┣⊱ Eᴅᴀᴅ: ' + age : ''}
┣⊱ XP: ${exp} _(${exp - min} / ${xp})_\n┣⊱ Lᴇᴠᴇʟ UP: ${max - exp}
┣⊱ Lᴇᴠᴇʟ: ${level}
┣⊱ Cᴏɪɴs: ${limit}
┣⊱ Rᴇɢɪsᴛʀᴏ: ${registered ? 'Sí (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n┣⊱ Úʟᴛɪᴍᴏ Cʟᴀɪᴍ: ' + new Date(lastclaim) : ''}
┣━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
handler.register = true
module.exports = handler
