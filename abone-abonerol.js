const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
    module.exports = {
        name: "a",
        execute(message, args, client){
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Yetkin yoksa kullanamazsın.')
        if(!args[0]) return message.channel.send('{a **abone**, {a **sıfırla**, {a **yetkili** veya {a **ver** şeklinde tekrar denemelisin.')
       
        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
        //? Abone rolü :)
        if(args[0] == 'abone'){
        let r = db.fetch(`aboneyetkili_${message.guild.id}`)  
        const embedd = new MessageEmbed()
        .setDescription('Hata oluştu.')
        .setAuthor('Hata: Eğer bir abone rolü belirleyecekseniz, kendinize en az 1 adet abone rolü yetkilisi belirlemelisiniz.')
        if(!db.fetch('aboneyetkili_' + message.guild.id)) return message.channel.send({
            embeds: [embedd]
        })
        const e11 = new MessageEmbed()
        .setFooter('Yetkili rolüne sahip değilsin.')
        if(!message.member.roles.cache.has(r)) return message.channel.send({
            embeds: [e11]
        })
        if(!rol) return message.channel.send('Yanlış kullanım. {a abone @rol şeklinde tekrar deneyin.')
        const e = new MessageEmbed()
        .setDescription(`Abone rolünüz başarı ile **"${rol.name}"** olarak ayarlandı`)
        message.channel.send({
            embeds: [e]
        })
        db.set(`abonerol_${message.guild.id}`, rol.id)
    }
    if(args[0] == 'sıfırla') {
        const e = new MessageEmbed()
        .setDescription(`Abone rolünüz sıfırlandı!`)
        const es = new MessageEmbed()
        .setDescription('Abone rolünüzü sıfırlayabilmeniz için bir abone rolünüzün olması gerek.')
        if(!db.fetch(`abonerol_${message.guild.id}`)) return message.channel.send({ embeds: [es]})
        db.delete(`abonerol_${message.guild.id}`)
        message.channel.send({ embeds: [e]})
      }
      let embedke = new MessageEmbed()
      .setDescription('{a yetkili @rol **şeklinde tekrar deneyin.**')
    if(args[0] == 'yetkili'){
        if(!rol) return message.channel.send({ embeds: [embedke]})
        const s = new MessageEmbed()
        .setDescription(`Abone rolü ayarlayıcısı "**${rol.name}**" olarak başarı ile ayarlandı`)
        db.set(`aboneyetkili_${message.guild.id}`, rol.id)
        message.channel.send({
            embeds: [s]
        })
        let hata = new MessageEmbed()
        .setDescription('{a ver @kişi şeklinde tekrar deneyin.')
        let subroleNotFound = new MessageEmbed()
        .setDescription('Eğer bir kişiye **abone** rolü vermek istiyorsanız,')
        .setFooter('{a abone @rol şeklinde bir abone rolü ayarlamanız lazım. {a sıfırla ile sıfırlayabilirsiniz.')
    }}
}