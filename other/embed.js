const {MessageEmbed} = require('discord.js')
const bot = require("../index.js");

module.exports.send = async function(message, embed) {
    const text = process.env.embedFooter
    
    const emb = new MessageEmbed()
    .setFooter({text: text, iconURL: bot.user.displayAvatarURL({size:2048,dynamic:true})})
    .setColor('RANDOM')
    embed = {... emb, ... embed}

    return message.channel.send({embeds: [embed]});
}

