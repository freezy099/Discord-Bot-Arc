module.exports = {
    name: 'start',
    description: "this is a ping command",
    execute(message, args, client, Discord){
        message.channel.send('Arcadian Interface Activated');
    }
}