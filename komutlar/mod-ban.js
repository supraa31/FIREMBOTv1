const {
    MessageEmbed,
    Discord
} = require('discord.js');


const {
prefix
} = require("../ayarlar.json")
module.exports = {
    kod: "ban", 
    async run(client, message, args) {
        const g = message.guild.id
        const embeddd = new MessageEmbed()    .setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
        .setFooter("Mesaj 10 saniye sonra silinecek.")
        .setDescription("Bu komudu kullanabilmek için belirli yetkilere sahip olmalısın. Mesela; \n \n \n BAN_MEMBERS")

        if(!message.member.permissions.has("BAN_MEMBERS") )return message.channel.send({ embeds: [embeddd]})
        .then(a => 
            setTimeout(() => {
                a.delete(
        
                )
            }, 10000)
            )
        const args1 = message.content.slice(prefix.length).trim().split(/ +/) || args1[1]
    let banned = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        let reason = args1.join(" ")
const id = new MessageEmbed()
.setFooter("Mesaj 10 saniye sonra silinecek.")
    .setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
    .setDescription("Bir kişiyi yasaklamak istiyorsanız, o kişinin idsini belirtmelisiniz.")
const sa = new MessageEmbed().setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
.setDescription("Bir sayı girmelisiniz. Yani bir ID.")
.setFooter("Mesaj 10 saniye sonra silinecek.")
const _onsekiz = new MessageEmbed()
.setFooter("Mesaj 10 saniye sonra silinecek.")
.setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
.setDescription("Bir kişinin idsi 18 karakterden büyük veya küçük olamaz.")
const bukimamk = new MessageEmbed()
.setFooter("Mesaj 10 saniye sonra silinecek.")
.setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
.setDescription(`<@${args}> ID sine sahip bir kişi yok.`)
let sebep;
if(!reason) sebep = "Sebep Belirtilmemiş."
if(isNaN(args)) return message.channel.send({ embeds: [sa]}).then(a => 
    setTimeout(() => {
        a.delete(

        )
    }, 10000)
    )

if(!args[0] || args[0].length === '0') return message.channel.send({ embeds: [id]}).then(a => 
    setTimeout(() => {
        a.delete(

        )
    }, 10000)
    )

if(args[0].length > 18 || args[0].length < 18) return message.channel.send({ embeds: [_onsekiz]}).then(a => 
    setTimeout(() => {
        a.delete(

        )
    }, 10000)
    )
if(!message.guild.members.cache.get(banned)) return 
let banlandı = new MessageEmbed()
.setAuthor(`${message.author.username} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true, size: 2048}), message.author.avatarURL())
.setDescription(
    `${message.author.username} adlı yetkili tarafından, \n \u200b \n ${banned} kişisi \n \u200b \n ${reason} sebebi ile \n \u200b \n ${message.guild.name} adlı sunucudan \n \u200b \n :x: **Yasaklanmıştır**`
)
.setFooter("Mesaj 10 saniye sonra silinecek.")
        message.guild.members.ban(banned)
        message.channel.send({ embeds: [banlandı]})
}}

