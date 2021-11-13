// Const
const Discord = require("discord.js");
const chalk = require("chalk");
const ayarlar = require("./ayarlar.json");
const { token, prefix } = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
require("moment-duration-format");

let r = "Rol belirtilmedi";

const {
    interaction,
    Collection,
    MessageEmbed,
    MessageButton,
} = require("discord.js");

const database = require("./utils/database.js");
const Tags = database();
//intents
const client = new Discord.Client({
    shards: "auto",
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

const log = (message) => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

const ba = fs.readdirSync("./komutlar");
log(`${ba.length} komut yüklenecek.`);

//database check

// tanımlamalar
const { join } = require("path"); // tanımlamalar

client.commands = new Discord.Collection(); // komutları alıyoruz

const commandFiles = fs
    .readdirSync(join(__dirname, "komutlar"))
    .filter((file) => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

//

client.on("ready", () => {
    client.user.setActivity("FIR-EM BOT");
    client.user.setAFK(true);
    log(chalk.red("Botumuz Aktif"));

    Tags.sync();

    //database check
    const servers = [];
    client.guilds.cache.forEach(async (guild) => {
        servers.push(guild);
        const tag = await Tags.findOne({ where: { guild_id: guild.id } });
        if (tag == null) {
            await Tags.create({ guild_id: guild.id });
        }
    });
    //Çıkarma
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;
        const tag = Tags.findOne({ where: { guild_id: message.guild.id } });
        try {
            client.commands.get(command).run(client, message, args, Tags, tag);
        } catch (error) {
            message.channel.send(`Bu kodda bir hata mı var sanki? `);
            console.error(error);
        }
    }
});
client.on("channelCreate", async (channel, guild) => {
    const date = new Date(channel.createdTimestamp);
    const joinedDate = date.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});
//ready

/**
 * Log
 */

// expected output: 0

client.login(token);

