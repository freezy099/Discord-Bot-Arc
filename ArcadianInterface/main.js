const Discord = require('discord.js');
const client = new Discord.Client();
const Server = require('./config.json');
//const modlogs = require('./probation-logs.js');
//const ADG = require('./ADG.exe');
const Suggestion = require('./commands/suggestions.js');
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


