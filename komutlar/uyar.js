let d = "discord.js"
const {
    MessageEmbed, 
    Discord
} = require("discord.js")
const db = require(
        "wio.db"
    )
    module.exports = {
        kod: "uyar",
        async run(client, message, args) {
            const args00 = message.content.slice(0).trim().split(/ +/);

            let cannotFindMember = new MessageEmbed() .setFooter(`${message.author.username} tarafından istendi. `, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
            cannotFindMember.setDescription(".uyar @kişi <neden> <kanal> şeklinde tekrar deneyin")
            const gönderilecek = message.mentions.channels.first()
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            let cannotFindChannel = new MessageEmbed() .setFooter(`${message.author.username} tarafından istendi. `, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
            .setColor("blue")
            .setDescription("Kişinin uyarıldığı ile ilgili mesajı göndereceğim kanalın id sini yazar mısınız?")
            const reason = args.slice(2).join(" ")
            const kişiargs = args.join(" ").slice(0);
            if(!member) return message.reply({embeds: [cannotFindMember]})
            if(!gönderilecek) return message.reply({ embeds: [cannotFindChannel]})
            const neden = reason; 
            const uyarıldı = new MessageEmbed() .setFooter(`${message.author.username} tarafından istendi. `, message.author.displayAvatarURL({ dynamic: true}))
            .setColor("AQUA").setDescription("Yeni uyarma olayı")
            .addField("Uyarılan kişi", `-| ${member} |-`)
            .addField("Uyaran yetkili", `-| ${message.author} |-`)
            .addField("Uyarılma nedeni", `-| ${neden} |-`)
            db.set(`warns_${member}_${message.guild.id}`, 0)
            db.add(`warns_${member}_${message.guild.id}`, 1)
            const embedd = new MessageEmbed() .setFooter(`${message.author.username} tarafından istendi. `, message.author.displayAvatarURL({ dynamic: true}))
            .setDescription("Başarılı!")
            message.channel.send({ embeds: [embedd]})
            .then(qwe => {
                setTimeout(() => {
                    qwe.delete()
                }, 3000);
                
            })
            gönderilecek.send({ embeds: [uyarıldı]})


            


                
        }

        }