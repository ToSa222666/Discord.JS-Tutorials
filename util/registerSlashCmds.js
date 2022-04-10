const { glob } = require("glob");
const { promisify } = require("util");

module.exports = async (bot) => {
    const globPromise = promisify(glob);
    const slashCommands = await globPromise(
        `${process.cwd()}/slashCmds/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        bot.slash.set(file.name, file);
        arrayOfSlashCommands.push(file);
    });
    bot.on("ready", async () => {
        await bot.application.commands.set(arrayOfSlashCommands);
        console.log('[/] Команды были запущены!')
    });

}