const { MessageEmbed } = require("discord.js")

module.exports = {
        kod: "rolver",
        async run(client, message, args) {
        let kişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
        let e = new MessageEmbed()
        .setDescription('{rolver @kişi @rol şeklinde tekrar denemelisin. Siz kişi kısmını unuttunuz.')
        let e1 = new MessageEmbed()
        .setDescription('{rolver @kişi @rol şeklinde tekrar denemelisiniz. Siz rol kısmını unuttunuz.')
        let e2 = new MessageEmbed()
        .setDescription('Rol başarı ile verildi.')
        .addField(`Rolü alan kişi`, `${kişi}`, true)
        .addField("\u200b", "\u200b", true)
        .addField("\u200b", "\u200b", true)
        .addField("\u200b", "\u200b", true)
        .addField("\u200b", "\u200b", true)
        
        .addField('Kişinin aldığı rol ', `${rol}`, true)
        let e3 = new MessageEmbed()
        .setDescription(`Rol vermeye çalıştığınız ${kişi} adlı kullanıcıda zaten vermeye çalıştığınız ${rol} rolü var.`)
        if(!kişi) return message.channel.send({ embeds: [e]}) 
        if(!rol) return message.channel.send({ embeds: [e1]})
        if(message.member.roles.cache.has(rol)) return message.channel.send({ embeds: [e3]}) 
        kişi.roles.add(rol)
        message.channel.send({ embeds: [e2]})

 
    }


}