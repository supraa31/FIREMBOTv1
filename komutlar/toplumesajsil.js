const {
    MessageEmbed, MessageSelectMenu
} = require('discord.js');
var sayı = "2-100"
var zaman = Date.now()
try{
module.exports = {
    kod: "sil",
    async run(client, message, args){
        const sayıembed = new MessageEmbed()
        .setFooter(`${message.author.username} adlı kişi tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))
        .setDescription(`${sayı} arasında bir sayı belirmelisin.`)
        const mess = new MessageEmbed()
        .setFooter(`${message.author.username} adlı kişi tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))
        .setDescription("Bir sayı girmelisin.")
        if(isNaN(args)) return message.channel.send({ embeds: [mess]})
        
        if(args < 2 || args > 100 ) return message.channel.send({ embeds: [sayıembed]}); 
        message.channel.bulkDelete(Number(args))
        const başarılı = new MessageEmbed()
        .setFooter(`${message.author.username} adlı kişi tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))
        .setDescription(`Başarı ile **${args}** mesaj silindi. İyi sohbetler!`)
        const ondortgun = new MessageEmbed()
        .setFooter(`${message.author.username} adlı kişi tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))
        .setDescription(`Atılan mesajların üstünden 14 gün geçmiş ise ben o mesajları silemem.`)
 
        message.channel.send({ embeds: [başarılı]}).then(i  => {
            setTimeout(function () {
                 i.delete()
            }, 5000);
        })
    }    
}}
catch(err) {
    console.error(err)
}
