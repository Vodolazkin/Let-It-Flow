require('dotenv').config();
const { Telegraf } = require('telegraf')
const { Order } = require('../db/models')
const {Op} = require('sequelize');


const bot = new Telegraf('5215524973:AAEQA2soYwrljKcAd-iptd97lt2-CcAteEk')
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}!`))
bot.on('text', async(ctx) => {
const day = new Date()
const order = await Order.findAll({ 
   where: {
     delivery_date: {
       [Op.between]: [new Date(), new Date(day.setDate(day.getDate() + 1))]   
   }
}})
const formatOrder = `
дата доставки: ${(order[0].delivery_date).slice(0, 10)}
время доставки: ${order[0].delivery_time}
`
ctx.reply(formatOrder)
})


bot.launch()
// улица: ${order[0][0].}
// дом: ${order[0][0].}
// квартира: ${order[0][0].}
// 
