const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    let modhelpEmbed = new Discord.RichEmbed()
    .setTitle("Watchdog")
    .setDescription("**Info Type:** Mod Help")
    .setFooter("Including all the /help commands!")
    .setColor("#00FF3B")
    .addField("/warn [user] [reason]", `Gives the user a warning!`)
    .addField("/clearwarn [user]", `Removes a warn from a user`)
    .addField("/noxp [user] [time in days]", `Disables the ability of the user to gain xp`)
    .addField("/kick [user] [reason]", `Kicks the user!`)
    .addField("/ban [user] [reason]", `Bans the user!`)
    .addField("/unban [ID] [reason]", `Unbans the user!`)
    .addField("/mute [user] [1sec/1min/1day/1week/1year]", `TempMutes the user!`)
    .addField("/unmute [user]", `Allows the user to start talking again!`)
    .addField("/say [message]", `Makes the bot say whatever message!`)
    .addField("/clear [amount of messages]", `Clears chat!`)
    .addField("/find [search]", `Find users easily with only typing 3 or more letters of their name!`)
    .addField("/emojify [text]", `Sends text as emojis!`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);


    message.author.send(modhelpEmbed);

}

module.exports.help = {
    name: "modhelp"
}
