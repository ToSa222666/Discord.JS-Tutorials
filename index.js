const {MessageEmbed, MessageButton, MessageActionRow, Client, Collection} = require('discord.js')
const tab = require('ascii-table')
const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const bot = new Client({
    intents: 32767,
    disableEveryone: true
})

bot.commands = new Collection();
bot.slash = new Collection();
bot.aliases = new Collection();
bot.embed = require('./other/embed.js');

mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Подключен к базе данных!')
}).catch((err) => {
    console.log('Не удается подключиться к базе данных.\nОшибка: ' + err)
})


require('./util/table.js')(bot)
require('./util/regEvents.js')(bot)
require('./util/registerSlashCmds')(bot)

bot.login(process.env.token)

module.exports = bot;

process.on('unhandledRejection', err =>{
    console.log('Неизвестная ошибка:\n')
    console.log(err)
})