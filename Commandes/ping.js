const Discord = require("discord.js")
const { EmbedBuilder } = require("discord.js")
const { color } = require('../config')
const config = require('../config')

module.exports = {

  name: "ping",
  description: "Afficher la latence",
  permission: "Aucune",
  dm: true,
  category: "Information",

  async run(bot, message, args) {

    const EmbedPing = new EmbedBuilder()
    .setColor(color)
    .setDescription(`Ping : \`${bot.ws.ping}\``)
    
    await message.reply({embeds: [EmbedPing]})
  }
}