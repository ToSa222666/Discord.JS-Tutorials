const tab = require('ascii-table')
const { readdirSync } = require('fs')
let table = new tab('Cmds')
.setHeading('Команда', 'Статус')
module.exports = (bot) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                bot.commands.set(pull.name, pull);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌')
                continue;
            }
        }
        const slashcommands = readdirSync(`./slashCmds/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of slashcommands){
            let pull = require(`../slashCmds/${dir}/${file}`);
            if(pull.name){
                bot.slash.set(pull.name, pull);
                table.addRow(`${file} [/]`,'✅')
            } else {
                table.addRow(`${file} [/]`, '❌')
                continue;
            }
        }
    });
    console.log(table.toString());
}