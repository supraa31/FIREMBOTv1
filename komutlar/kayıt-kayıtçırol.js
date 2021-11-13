const { MessageEmbed } = require('discord.js');
const db = require('wio.db');
module.exports = {
 
    kod: "kayıtçı",
    async run(message, args, client){
        const e = new MessageEmbed()
        .setDescription(`Kullanmış olduğun ${message.content} komudunda hata var! Düzgün bir rol girmemiş olabilirsin veya bir rol belirtmemiş olabilirsin.`)
        args[0]
        let rol = message.mentions.roles.first() 
        if(!rol) return message.channel.send({
                embeds: [e]
            })
  

        

    dba.set(`kayıtçı_${message.guild.id}`, rol.id)
        const ee = new MessageEmbed()
        let ayarlandı = dba.get(`kayıtçı_${message.guild.id}`)
        ee.setDescription(`Rolünüz başarı ile @${rol.name} olarak ayarlandı`)
        message.channel.send({
            embeds: [ee]
        })
        
   },
   };