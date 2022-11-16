const Discord = require('discord.js')
const loadSlashCommands = require('../Loaders/loadSlashCommands')
const loadDatabase = require('../Loaders/loadDatabase')
const { ActivityType } = require('discord.js')
const config = require("../config")


module.exports = async (bot) => {

  bot.db = await loadDatabase(bot)
  bot.db.connect(function () {
    console.log(`🔰 Base de données connecté avec succès ! ✅`)
  })

  await loadSlashCommands(bot)

  let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
  let activities = [`${totalUsers} membres`, `${bot.guilds.cache.size} serveurs`]
  setInterval(() => bot.user.setActivity(`/help | ${activities[Math.floor(Math.random() * activities.length)]}`), 10000)
  
  console.log(`🤖 ${bot.user.tag} c'est connecté avec succès ! ✅`)
}