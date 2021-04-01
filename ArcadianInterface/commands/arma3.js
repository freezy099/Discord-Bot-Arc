module.exports = {
    name: 'arma3',
    description: "this is a ping command",
    execute(message, args, client, Discord){
        message.channel.send('IP = 172.96.164.74, Port = 2307, PW = ADG1');
    }
}