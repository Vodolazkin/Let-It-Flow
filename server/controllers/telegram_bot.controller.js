const res = require('express/lib/response');
const { Telegraf } = require('telegraf')
require('dotenv').config();
const { Order } = require('../db/models')


const bot = new Telegraf('5215524973:AAEQA2soYwrljKcAd-iptd97lt2-CcAteEk')
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}!`))
// bot.start((ctx) => console.log(ctx))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('text', async() => {
 
 const data = Order.findAll()
//  .then((res) => res.json())
 .then((res) => console.log(res))
 
})


bot.launch()
