const Discord = require('discord.js');

module.exports.run = (bot, message, args, tools) => {

    
    message.delete();
    let infoEmbed = new Discord.RichEmbed()
    .setTitle("Command: /unban")
    .setColor("#999999")
    .setDescription("**Description:** unbans the user!\n**Usage:** /unban [ID] [reason]\n**Examples:**\n  /ban 206516500171849729 Being Good Cookie");
  

    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
    if (reason.length < 1) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
    if (!user) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
    message.guild.unban(user);
    message.reply(`Successfuly unbanned <@${user}>`).then(msg => msg.delete(5000));
}; 

module.exports.help = {
  name: "unban"
}