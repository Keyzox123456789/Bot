const Discord = require('discord.js')
const transcript = require("discord-html-transcripts")
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, SelectMenuBuilder } = require("discord.js")
const { color } = require('../config')
const config = require('../config')

module.exports = async (bot, interaction) => {
  const db = bot.db

  if(interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {

    let entry = interaction.options.getFocused()
    
  }

  if(interaction.isButton()) {

  }

  if(interaction.isSelectMenu()) {
    
  }
  
  if(interaction.type === Discord.InteractionType.ApplicationCommand) {

    let command = require(`../Commandes/${interaction.commandName}`)
    command.run(bot, interaction, interaction.options, bot.db)
  }
}