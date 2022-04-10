const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Отображает пинг бота",
    run: async (bot, i, args, MessageEmbed) => {
        i.followUp(`Высчитываю пинг...`).then(async (d) => {
            let ping = Math.floor( d.createdTimestamp - i.createdTimestamp)

        const emb = new MessageEmbed()
        .setAuthor({name: `${bot.user.tag}`, iconURL: bot.user.displayAvatarURL({size:2048,dynamic:true})})
        .setDescription(`Задержка бота: **${ping}** \nЗадержка API: **${bot.ws.ping}**`)
        .setColor('RANDOM')
        d.edit('Готово! 🏓')
        i.followUp({embeds: [emb]})
    })
    },
};
