const { MessageEmbed } = require("discord.js")


module.exports = {
    kod: "rolbilgi",
    async run(client, message, args){
        let e = new MessageEmbed()
        .setDescription('Bir rol belirtmedin veya düzgün bir rol belirtmedin.')
        let rol = message.mentions.roles.first() || message.guild.roles.cache.find(args[0])
        if(!rol) return message.channel.send({ embeds: [e]})
        let embed = new MessageEmbed()
        .setDescription('Rol bilgi')
        .addField(`Rolün adı`, `${rol.name}`, )
        .addField('> Rolün HEX cinsinden rengi', `${rol.hexColor}`)
        .addField('> Rolün kurulma tarihi', `${rol.createdTimestamp}`)
        .addField("> Rolün ID'si:", `${rol.id}`)
        .addField("> Bu role sahip olan kişiler", `${rol.members.map()}`)
        let userid;
        message.channel.send({ embeds: [embed]})
        .then(err => {
            if(err) console.error(err)
        })
    }
}