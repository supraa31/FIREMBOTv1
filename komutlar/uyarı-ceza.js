const {
    MessageEmbed,
    Discord
} = require("discord.js")
const db = require("wio.db") 


module.exports = {
    kod: "uyarıceza",
    async run(client, message, args) {
        const kelime = [
            "kick",
            "ban"
        ]
        const needANumber = new MessageEmbed()
        .setFooter(`"${message.author.username}" tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
        .setDescription("Bir sayı girmelisin.")
        .setColor("DARK_BUT_NOT_BLACK")
        const error = new MessageEmbed()
        .setFooter(`"${message.author.username}" tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
        .setColor("DARK_BUT_NOT_BLACK")
        .setDescription(".uyarıceza <uyarısayısı> kick veya ban şeklinde kullanmalısınız.")
        const success = new MessageEmbed()
        .setFooter(`"${message.author.username}" tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
        .setColor("DARK_BUT_NOT_BLACK")
        .setDescription(`Bir kişinin uyarısı ${args[0]} olunca yasaklama cezası uygulanacak.`)

        if(args[1] !== kelime) return message.reply({ embeds: [error]})
        if(typeof args[0] !== "number") return message.reply({ embeds: [needANumber]})
        if(isNaN(args)) return message.reply({ embeds: [needANumber]})
        if(!args) return message.reply({ embeds: [needANumber]})
        if(args[0] == kelime[1]) return message.reply({ embeds: [success]})
        db.set(`warnCeza_${message.guild.id}`, "ban")
        db.set(`warnSayı_${message.guild.id}`, `${args[0]}`)
    }
}