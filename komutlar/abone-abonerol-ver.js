const { MessageEmbed } = require("discord.js")
let db = require('wio.db')



  module.exports = {
    kod: "deneme",
    async run (client, message, args, dba) {
        let kişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let e = new MessageEmbed()
        .setDescription('Düzgün bir kişi girmemiş, veya bir kişi girmemiş olabilirsin.')
        if(!kişi) return message.channel.send({embeds: [e]})
        let abonerol = dba.get(`abonerol_${message.guild.id}`)
        let e1 = new MessageEmbed()
        .setAuthor(`Komut kullanımında hata yaptın ${message.author.username}.`)
        .setFooter('Öncelikle {a abone @rol şeklinde bir abone rolü ayarlamalısınız. Unutmayın, öncelikle kendinize bir yetkili rolü belirlemeli sonrada bu role sahip olmalısınız.')
        if(!abonerol) return message.channel.send({ embeds: [e1]})
        let e2 = new MessageEmbed()
        .setAuthor(`${kişi.user.username} adlı kişiye sizin ayarladığınız abone rolü olan ${message.guild.roles.cache.get(abonerol).name} rolü verildi.`)
        kişi.roles.add(abonerol)
        if(kişi.roles.cache.has(abonerol)) 
        console.log(message)
        console.log(`Added ${abonerol} to ${args[0]}`)
        message.channel.send({ embeds: [e2]})
        

        
    }

  }
