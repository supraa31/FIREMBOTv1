const { MessageEmbed } = require('discord.js');
const db = require('wio.db')
module.exports = {
 
    name: "kurulum",
    execute(message, args){
        message.channel.send('Botunuzun sunucu kurulumu başladı. Mesajlar değiştikçe bilgilendirileceksiniz.')
        const b1 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumu başladı. Lütfen bekleyin.')
        const b2 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumunun ilerleme derecesi: :green_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: ')
        const b3 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumunun ilerleme derecesi: :green_square:  :green_square:  :green_square:  :green_square:  :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:')
        const b4 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumunun ilerleme derecesi: :green_square:  :green_square:  :green_square:  :green_square:  :green_square:  :black_large_square: :black_large_square: :black_large_square: :black_large_square:')
        const b5 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumunun ilerleme derecesi: :green_square:  :green_square:  :green_square:  :green_square:  :green_square:  :green_square: :green_square:  :black_large_square: :black_large_square:')
        const b6 = new MessageEmbed()
        .setDescription('Botunuzun sunucu kurulumunun ilerleme derecesi: :green_square:  :green_square:  :green_square:  :green_square:  :green_square:  :green_square: :green_square:  :green_square: :green_square: ')
        const b7 = new MessageEmbed()
        .setAuthor('Botunuzun sunucu kurulumu tamamlandı!')
        message.channel.send('Kurulumunuz devam ediyor.').then(msg => {
            setTimeout(() => {
                msg.edit({ embeds: [b1]})
            }, 10000);
            let r = 'Rol belirtilmedi.'
            db.set(`erkekrol_${message.guild.id}`, `${r}`)
            setTimeout(() => {
                msg.edit({ embeds: [b2]})
            }, 10000);
            db.set(`kadınrol_${message.guild.id}`, `${r}`)
            setTimeout(() => {
                msg.edit({ embeds: [b3]})
            }, 10000);
            db.set(`kayıtçı_${message.guild.id}`, `${r}`)
            setTimeout(() => {
                msg.edit({ embeds: [b4]})
            }, 10000)
            setTimeout(() => {
                msg.edit({ embeds: [b5]})
            }, 10000);
            setTimeout(() => {
                msg.edit({ embeds: [b6]})
            }, 10000);
            setTimeout(() => {
                msg.edit({ embeds: [b7]})
            }, 10000);
        })
   },
   };