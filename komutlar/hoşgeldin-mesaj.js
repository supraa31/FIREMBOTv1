const { MessageEmbed } = require("discord.js");
const config = require("../ayarlar.json");
const prefix = config.prefix;
module.exports = {
    kod: "hmesaj",
    async run(client, message, args, Tags, tag) {
        const data = Tags.findOne({ where: { guild_id: message.guild.id } });
        console.log(data);
        
        if (args[0] == "kanal") {
            const mentionedChannel = message.mentions.channels.first();
            const date = new Date(mentionedChannel.createdTimestamp)
            const mentionedChannelCreatedDate = date.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const embed = new MessageEmbed()
                .setTitle("Yanlış kullanım tespit edildi.")
                .setDescription(
                    `${prefix}hmesaj kanal #kanal şeklinde tekrar denemelisin.`
                );
            const embed1 = new MessageEmbed()
                .setTitle("Komut Başarı İle Çalıştırıldı.")
                .setDescription(
                    `Hoşgeldin mesaj kanalınız ile ilgili bilgiler aşağıda verildi.`
                )
                .addField("Kanalınızın adı;", `<#${mentionedChannel.id}>`, true)
                .addField("Kanalınızın ID'si;", `__${mentionedChannel.id}__`, false)
                .addField("Kanalınızın pozisyonu;", `__${mentionedChannel.position}__`,false)
                .addField("Kanalınızın kurulma tarihi;", `__${mentionedChannelCreatedDate}__`)
                
            if (!mentionedChannel) return message.reply({ embeds: [embed] });

            data.channel_id = mentionedChannel.id;
            await Tags.update(
                { welcome_message: data },
                { where: { guild_id: message.guild.id } }
            );
            message.reply({ embeds: [embed1] });

            
        }
    },
};
