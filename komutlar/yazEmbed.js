const chalk = require('chalk');
const { MessageEmbed } = require("discord.js");  


module.exports = {
 
    name: "embedyaz",
    ownerOnly: false,
     execute(message, args, client){
        let args1 = message.content.trim().split(/ + /);
        let args2 = message.content.trim().split(/ + /)

        if(args2[2]) return message.channel.send('Çok fazla argüman!')
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: | Dostum yetkin yok')
        let mesaj = args.join(' ');
        let mesaj1 = args1.join(' ');
        if(!mesaj) return message.channel.send('Bir mesaj belirt!')




   const e = new MessageEmbed()
   .setColor('WHITE')
   .setDescription(mesaj) 
   message.channel.send({
       embeds: [e]
   })
    },
   };
   