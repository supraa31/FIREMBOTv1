const { MessageEmbed } = require('discord.js');
const db = require('wio.db');
module.exports = {
 name: "otorol",
 execute(message, args) {

     if(!args[0]) {
         let e = new MessageEmbed()
         .setDescription('Otorol menüsü \n ')
         .addField('> ``{otorol sıfırla``', 'Otorolünüzü sıfırlar.', true)
         .addField('> ``{otorol ayarla @rol``', 'Otorolünüzü ayarlar.', )
         .addField('> ``{otorol``', 'Bu menüyü açar.', true)
         message.channel.send({
             embeds: [e]
         })
     }
     if(args[1] == 'ayarla') {
        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
        if(!rol) return message.channel.send('Yanlış kullanım. Yardım menüsü için {otorol')
     }
     db.set(`otorol_${message.guild.id}`, rol.id)
     let ok = new MessageEmbed()
     .setDescription('Otomatik rolünüz başarı ile ayarlandı')
     .addField('Ayarlanan oto rolü:', `${rol}`, true)
    message.channel.send({
        embeds: [ok]
    })

    if(args[0] == 'sıfırla') {

    }
 }


}