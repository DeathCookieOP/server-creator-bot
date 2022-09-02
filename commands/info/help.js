const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Watchdog")
    .setDescription("**Info Type:** Help")
    .setColor("#00FF3B")
    .addField("/wdr [user] [rule]", `Reports a user to the staff!`)
    .addField("/report [user] [rule]", `Reports a user to the staff!`)
    .addField("/8ball [question]", `Ask it any question and it will answer it for you!`)
    .addField("/coinflip", `Flips a coin!`)
    .addField("/reverse [message]", `Reverse the message u send!`)
    .addField("/translate [language] [message]", `Translate a sentence to any language!`)
    .addField("/userinfo [user]", `Shows information of the tagged user!`)
    .addField("/invite", `Gives you an invite to add the bot to your server!`)
    .addField("/avatar [user]", `Shows you the user's avatar! You can also right click copy the avatar!`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

    message.channel.send("Check DMs :envelope_with_arrow:!").then(msg => msg.delete(5000));
    message.author.send(helpEmbed);

}

module.exports.help = {
    name: "help"
}
