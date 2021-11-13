const {
    MessageEmbed
} = require("discord.js")
const config = require("../ayarlar.json")
const prefix = config.prefix
const chalk = require("chalk")
module.exports = {
    kod: "log",
    async run(client, message, args, abone, logs) {
        
        function x() {
            console.log(chalk.green(`${message.guild.id} sunucusunda log belirtildi. `))
            console.log(chalk.bold.red(`Başarılı`))
        }
        const veri = logs.get(`logkanal_${message.guild.id}`)
        const logTypes = [
            "kanalOluşma",
            "kanalSilme",
            "rolOluşma",
            "rolSilme",
            "kişiBanlama",
            "kişiBanKaldırma",
            "kişiKatılma",
            "kişiAyrılma"
        ]

        let supraa = new MessageEmbed()
        .setFooter("Yanlış kullanım tespit edildi.", message.author.displayAvatarURL())
        .setDescription("Komudu kullanırken bir hata yaptın. Doğru kullanım örnekleri aşağıda verildi. \n \u200b")
        .addField(`${prefix}log kanalOluşma`, `${prefix}logkanal komudu ile ayarladığınız kanala kanal oluştuğu zaman kanal ile ilgili bilgileri yollar.`, true)
        .addField(`${prefix}log kanalSilme`, `${prefix}logkanal komudu ile ayarladığınız kanala kanal silinince silnen kanalın bilgilerini yollar.`, true)
        .addField(`${prefix}log rolOluşma`, `${prefix}logkanal komudu ile ayarladığınız kanala oluşturulan rolün bilgilerini yollar.`, true)
        .addField(`${prefix}log rolSilme`, `${prefix}logkanal komudu ile ayarladığınız kanala silinen rolün bilgilerini yollar`, true)
        .addField(`${prefix}log kişiBanlama`, `${prefix}logkanal komudu ile ayarladığınız kanala banlanan kişi ile ilgili bilgileri yollar`, true)
        .addField(`${prefix}log kişiBanKaldırma`, `${prefix}logkanal komudu ile ayarladığınız kanala banı kaldırılan kişinin bilgilerini yollar.`, true)
        .addField(`${prefix}log kişiKatılma`, `${prefix}logkanal komudu ile ayarladığınız kanala katılan kişi ile ilgili bilgileri yollar`, true)
        .addField(`${prefix}log kişiAyrılma`, `${prefix}logkanal komudu ile ayarladığınız kanala ayrılan kişi ile ilgili bilgileri yollar`, true)
         const cannotFindChannel = new MessageEmbed()
         .setDescription(`Önce \n > ${prefix}logkanal \n Komudu ile bir log kanalı ayarla.`)
         if(!veri) return message.reply({ embeds: [cannotFindChannel]}) 
        if(!logTypes.includes(args[0])) return await message.reply({embeds: [supraa]})
        const logChannel = message.guild.channels.cache.get(x => x.id == veri)
         if(args[0] == logTypes[0]) {
            var ok = new MessageEmbed()
            .setAuthor(`${message.author.username} adlı kişi tarafından istendi.`, message.author.displayAvatarURL())
            .setDescription(`İşleminiz başarı ile gerçekleştirildi. \n \u200b Bundan sonra <#${veri}> kanalına kanal oluşturulunca o kanal ile ilgili bilgileri göndereceğim.`)
            logs.set(`logType_channelCreate_${message.guild.id}`, "acik")
            
            message.reply({ embeds: [ok]})
            x()
                }
         if(args[0] == logTypes[1]) {

         } 

      
    }
}; 