const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    let supportEmbed = new Discord.RichEmbed()
    .setTitle("Watchdog Support")
    .setDescription("Join this discord server for support or contact the dev.")
    .addField("Discord:", `Watchdog Support: https://discord.gg/KJQPtMr`, true)
    .addField("Dev:", "DeathCookieOP - https://twitter.com/DeathCookieOP", true);

    let sender = message.author;

    sender.send(supportEmbed);

}

module.exports.help = {
  name: "support"
}
