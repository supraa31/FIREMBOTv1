const {
    MessageEmbed
} = require("discord.js")
module.exports = {
    kod: "pp",
    async run(client, message, args, abone, logs) {
    
        const member = message.mentions.users.first() || message.author 
        if(member) {
            const memberAvatar = new MessageEmbed(  )
            .setDescription(`${member} adlı kişinin avatarı`)
            .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 2048}))
            message.reply({ embeds: [memberAvatar]})
        }
        if(!member){ 
    const messageAuthorAvatar = new MessageEmbed(   )
        .setDescription(`Bir kişi belirtmediğin için senin avatarını atıyorum.`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048}))
        return message.reply({ embeds: [messageAuthorAvatar]})
        }



    }
}