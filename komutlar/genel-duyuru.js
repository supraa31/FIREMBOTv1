const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
  kod: "duyuru",
  async run(message, args, client)  {

    args[0] || message.mentions.channels.first()
    const embed = new MessageEmbed()
      .setTitle("Duyuru!")
      .setDescription(
        `${message.author} adlı yetkili tarafından yollanan duyuru aşağıda`
      )
      .addField("Gönderilen duyuru", `${args}`, true)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
    if(!args) return message.channel.send('Ne duyuracağını belirmelisin.')
    if(message.channel.type == 'dm')return;
  },
};
