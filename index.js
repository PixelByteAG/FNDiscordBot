//import the discord.js module
const discord = require('discord.js');

//Create an instance of Discord to control the bot
const bot = new discord.Client();

//token
const token = 'NDQzNTQwMDcyMjA2MzAzMjM3.DdO2ZQ.rN7znpXm9EaQsxRGVimb5mQOfsE';

bot.on('ready', () => {
    console.log('Hello World!');
});

bot.on('message', message => {
    //easy check for bot not to confuse itself with itself
    if(message.author.bot) return;

    if(message.content.indexOf('{') === 0){
        var text = message.content.substring(1);

        message.reply("Hi", message.author.name);

    }
});

bot.login(token);