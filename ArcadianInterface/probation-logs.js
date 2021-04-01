
const ProbationLog = ['Probation']

module.exports = (client) => {
    const channelID = '826882600005664838'
    const roleID = '826885688162779157'
    client.on('message', (message) => {
        const { content, member } = message 

        if (member.user.bot){
            console.log('Ignoring Bot')
            return
        }
        console.log(content)

        const hasRole = member.roles.find((role) => {
            return roles.include(role.name)
        })

        if (hasRole){
            const channelID = guild.channels.cache.get(channelID)
            console.log(channel.name)
            channel.send(`<@${member.id}> said this:, "${content}"`)

        }
    })
}
