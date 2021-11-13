const {
    MessageEmbed, 
    Discord
} = require("discord.js")
const db = require("wio.db")
module.exports = {
    name: "küfürengel", 
    execute(
   message, args, client
    ){

       const _ = new MessageEmbed()
       .setTitle(`Küfür engel`).setDescription(`${message.author} \n \u200b \n \u200b \n ${message.guild} sunucusu için küfür engel açıldı!`).setTimestamp()        .setAuthor(`${message.author} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
       const __ = new MessageEmbed()
       .setTitle(`Küfür engel`).setDescription(`${message.author} \n \u200b \n \u200b \n ${message.guild} sunucusu için küfür engel kapatıldı!`).setTimestamp()        .setAuthor(`${message.author} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
       const ___ = new MessageEmbed()
       .setTitle(`Küfür engel`).setDescription(`${message.author} \n \u200b \n \u200b \n {küfürengel aç veya {küfürengel kapat şeklinde tekrar dene. \n \u200b \n \u200b `).setTimestamp()        .setAuthor(`${message.author} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
      if(!args[0]) return message.channel.send({embeds: [___]})
       if(args[0] == 'aç') {
            db.set(`küfürT_${message.guild.id}`,"acik")
            message.channel.send({
                embeds: [_]
            })
        }
        if(args[0] == 'kapat') {
            db.set(`küfürT_${message.guild.id}`, "kapat")
            message.channel.send({
                embeds: [__]
            })
        }
    }

}