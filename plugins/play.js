let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw '▶⏸ *ƤLAƳ*\n\nQué estás buscando?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '▶⏸ *ƤLAƳ*\n\nVideo / audio no encontrado'
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
┏━━━━❉ ƤLAƳ ❉━━━━┓
┣⊱*ƬίтυƖσ:* ${title}
┣⊱*Ƭαмαη̃σ:* ${filesizeF}
┣⊱*Ƒυєηтє:* ${vid.url}
┣━━━━━━━━━━━━
*${isLimit ? 'Puesto ': ''}Link:* ${dl_link}
`.trim(), m)
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
┏━━━━❉ ƤLAƳ ❉━━━━┓
┣⊱*ƬίтυƖσ:* ${title}
┣⊱*Ƭαмαη̃σ:* ${filesizeF}
┣⊱*Ƒυєηтє:* ${vid.url}
┣━━━━━━━━━━━━
`.trim(), m, false, _thumb || {})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true

handler.exp = 0
handler.limit = true

module.exports = handler