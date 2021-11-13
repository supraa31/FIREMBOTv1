const { MessageEmbed } = require("discord.js")
let db = require("wio.db")
let Discord = require("discord.js")

const log = message => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
}

let Permissions = Discord.Permissions

module.exports = {
  kod: "muterol",
  async run (client, message, args) {
        console.log("deneme123")
        const muteRoleNotFound = new MessageEmbed()
        .setAuthor(`${message.author.username} adlı kullanıcı komudu hatalı kullandı`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
        .setColor("#f0f0f0")
        .setDescription('Bu komudu {muterol @rol şeklinde tekrar dene.')
        const muteRol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
        if(!args[0]) return message.channel.send({
            embeds: [muteRoleNotFound]
        })
        const ok = new MessageEmbed()
        .setAuthor(`${message.author} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024}))
        .setColor("#f0f0f0")
        .setDescription(`Başarı ile muteli rolünüz "${muteRol}" olarak ayarlanmıştır.`)
        db.set(`muterol_${message.guild.id}`, muteRol.id)
        message.channel.send({
            embeds: [ok]
        })
        
        muteRol.setColor("#000000")
        muteRol.setPermissions([Permissions.FLAGS.SEND_MESSAGES], "a")

        
    }}
