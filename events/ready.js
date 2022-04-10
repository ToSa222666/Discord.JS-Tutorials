const bot = require("../index");
const cfonts = require('cfonts');
bot.on("ready", () => {

const banner = cfonts.render((`BOT IS READY!`), {
		font: 'block',
		color: 'candy',
		align: 'left',
		gradient: ["red","magenta"],
		lineHeight: 3
	});
console.log(banner.string); 

});
