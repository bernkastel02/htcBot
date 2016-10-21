const DHTC = require('discord.htc')
const config = require("./config.json")
var bot = new DHTC(config.token)
var prefix = config.prefix

bot.on('botReady', () => {
  console.log('Ready!')
})

bot.on('createdMessage', (message) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    bot.makeMessage(message.channel_id, 'pong')
  }
})

bot.connect()
