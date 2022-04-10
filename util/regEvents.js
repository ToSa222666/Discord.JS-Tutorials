const { glob } = require("glob");
const { promisify } = require("util");

module.exports = async (bot) => {
    const globPromise = promisify(glob);
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));
}