# Discord.JS-Tutorials
## Этот обработчик команд был сделан для легкой разработки Discord Бота на Discord.JS V13!

![discord.JS](https://i.imgur.com/LbBm5nX.jpg)

# **filename.js  (commands)**

```js
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "название команды",
    aliases: ['псевдоним1', 'псевдоним2', 'псевдоним3'],
    run: async (bot, message, args) => {
    //код...
    })
    },
};
```

# **filename.js  (slashCmds)**

```js
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "название команды",
    description: "описание команды",
    run: async (bot, i, args, MessageEmbed) => {
    //код...
    },
};
```

## **Чтобы запустить бота:**

- В терминале: **npm i discord.js ascii-table cfonts dotenv fs glob mongoose util**
- В файле **.env** Вставьте всю нужную информацию
- В терминале пропишите **node index.js**

### **Мои ссылки:**

- **JulyBot - [тык](https://discord.com/api/oauth2/authorize?client_id=951096071579385856&permissions=1513912527991&scope=bot%20applications.commands)**
- **YouTube - [тык](https://www.youtube.com/channel/UCOuxIa-KrOGpi3c_uCTumPA)**
- **Discord - ToSa#2022** 

[![banner](https://cdn.discordapp.com/attachments/921471060292030485/962720178699923517/unknown.png)](https://discord.gg/8apWqRmkAh)
