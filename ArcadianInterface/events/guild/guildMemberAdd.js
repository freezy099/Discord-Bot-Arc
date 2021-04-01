module.exports = (Discord, client, message, args, command) =>{
    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Guest');
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('823749177993199668').send(`Welcome <@${guildMember.user.id}>, If you are looking to join the Arcadian Defence Group please visit the channel <#825710176517881887> , If not then please enjoy your stay.`)
    })
}