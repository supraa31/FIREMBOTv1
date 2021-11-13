const { MessageEmbed } = require("discord.js")
const db = require("wio.db")


module.exports = {
 
    kod: "ky",
    async run(client, message, args){
        let ee = db.fetch(`erkekrol_${message.guild.id}`)
        let kk = db.fetch(`kayıtçı_${message.guild.id}`)
        let as;
        const e = new MessageEmbed()
                    e.setDescription('Kayıt Yardım')
                    e.addField(`${message.guild.name} için erkek rolü:`, `@${ee}`, true)
                    e.addField(`${message.guild.name} için kayıtçı `,`@${kk}`, true)
                    if(db.fetch("erkekrol_" + message.guild.id) == " Rol belirtilmedi.") return message.channel.send('Erkek rolünü ayarlamadınız. Ayarlamak isterseniz {ea @rol.')
                    message.channel.send({
                        embeds: [e]
                    })
    }
   };


