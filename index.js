//import the discord.js module
const discord = require('discord.js');

//Create an instance of Discord to control the bot
const bot = new discord.Client();
//create an array of accepted commands
var validCommands = ['help', 'fn', 'hello'];

//token
const token = 'NDQzNTQwMDcyMjA2MzAzMjM3.DdO2ZQ.rN7znpXm9EaQsxRGVimb5mQOfsE';

bot.on('ready', () => {
    console.log('Hello World!');
});

bot.on('message', message => {
    //easy check for bot not to confuse itself with itself
    if(message.author.bot) return;

    if(message.content.indexOf(';') === 0){
        var text = message.content.substring(1);
        console.log ('Command Used: ', text);
        console.log ('User: ', message.author.username);
        if(validCommands.includes(text)){
            console.log('Command Successful.');
            if(text === 'help'){
                message.reply("if you need help, go fuck yourself.");
            }


        }else{
            message.reply("not a valid command!", message.author.name);
        }


    }
});

bot.login(token);