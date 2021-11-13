module.exports = {
    kod: ".",
    async run(client, message, args, Tags) {
        const data = {
            name: "test",
            enabled: true,
        };
        Tags.update(
            { welcome_message: data },
            { where: { guild_id: message.guild.id } }
        );
        message.reply("sa");
    },
};
