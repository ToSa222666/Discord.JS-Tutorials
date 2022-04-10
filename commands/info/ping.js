const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['пинг'],
    run: async (bot, message, args) => {
        message.channel.send(`Высчитываю пинг...`).then(async (d) => {
            let ping = Math.floor( d.createdTimestamp - message.createdTimestamp)

        const emb = new MessageEmbed()
        .setAuthor({name: `${bot.user.tag}`, iconURL: bot.user.displayAvatarURL({size:2048,dynamic:true})})
        .setDescription(`Задержка бота: **${ping}** \nЗадержка API: **${bot.ws.ping}**`)
        .setColor('RANDOM')
        d.delete()
        message.channel.send({embeds: [emb]})
    })
    },
};
