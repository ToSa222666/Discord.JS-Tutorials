const bot = require("../index");

bot.on("messageCreate", async (message) => {

    const prefix = process.env.prefix
    if(message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ")

    let cmd = args.shift().toLowerCase()

    if (cmd.length === 0) return;

            let command = bot.commands.get(cmd);

            const ownerID = process.env.ownerID

            const member = message.member

            if(command.ownerOnly && !ownerID.includes(member.id)) {
                return message.channel.send('Данная команда только для разработчика этого бота!')
            }

        if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (!command) return;
    await command.run(bot, message, args);
});