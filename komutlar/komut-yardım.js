const _ = require("discordjs-button-pagination")
const {
    MessageEmbed,
    MesageActionRow,
    MessageButton
} = require("discord.js")
module.exports = {
    kod: "yardım",
    async run (client, message, args) {
        const e1 = new MessageEmbed()
        .setDescription("sa")
        const e2 = new MessageEmbed()
        .setDescription("sa1")
        const e3 = new MessageEmbed()
        .setDescription("s1a")
        const button = new MessageButton()
        .setCustomId("previvousbtn")
        .setStyle("DANGER")
        .setLabel("sa")
        const button1 = new MessageButton()
        .setCustomId("nextbtn")
        .setStyle("DANGER")
        .setLabel("asd")
    _(message,[e1, e2, e3], [button, button1], 30000)
    }
}   