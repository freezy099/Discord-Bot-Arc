module.exports = {
    name: 'ts3',
    description: "this is a ping command",
    execute(message, args, client, Discord){
        message.channel.send('IP = 173.234.27.145:10070');
    }
}