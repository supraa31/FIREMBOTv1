const {
    MessageEmbed
} = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    kod: "ticket",
    async run(client, message, args) {
      const embed = new MessageEmbed()
      .setAuthor("\u200b", message.author.displayAvatarURL({ dynamic: true, size: 1024}))
      .setDescription(
      `Selam **${message.author.username}!** \n Burası senin açtığın ticket kanalı. \n Buradaki yetkililer sana yardım edecekler. \n Kanalı kapatmak istiyorsan tik butonuna, istemiyorsan çarpı butonuna tıklamalısın.`
      )
      message.guild.channels.create(`${message.author.id}`, {
        type: "GUILD_TEXT",
        topic: `${message.author.displayName} adlı kişinin ticketi.`,
        nsfw: false,
        permissionOverwrites:[
          {
            id: message.author.id,
            allow: message.author.roles
          },
        ],
        position: "1",
        rateLimitPerUser: "1",
        reason: "0"
      })
     const kanalbul = message.guild.channels.cache.find()


        const Permissions = Discord.Permissions
        const _ = require("discordjs-button-pagination")
      const btn = new Discord.MessageButton()
      .setCustomId("previvousbtn")
      .setLabel("\u200b")
      .setEmoji("✅")
      const btn1 = new Discord.MessageButton()
      .setCustomId("nextbtn")
      .setLabel("\u200b")
      .setEmoji("✖️")
      kanalbul.send({ embeds:[embed], components: [btn, btn1]})
      const başarılı = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} başarı ile işlemini gerçekleştirdi`, message.author.displayAvatarURL({ 
        dynamic: true,
        size: 1024
      }))
      .setDescription(`İşlem başarılı :white_check_mark: bu mesaj birazdan silinecek.`)

           client.on("interactionCreate", interaction => {
             if(interaction.customId == "previvousbtn") return message.delete()
             if(interaction.customId == "nextbtn") {
               interaction.channel.send({embeds: [başarılı]})
               kanalbul.delete()
               .then(anan => {
                 setTimeout(() => {
                   anan.delete(
                   )
                 }, 5000);
               })
             }
           })
          
    }}
