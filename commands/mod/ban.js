const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /ban")
  .setColor("#999999")
  .setDescription("**Description:** bans the user forever!\n**Usage:** /ban [user] [reason]\n**Examples:**\n  /ban @DeathCookieOP Being Lazy");
  

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.channel.send(infoEmbed);
  if(!message.member.hasPermission("BAN_MEMBERS")) return;



  let banEmbed = new Discord.RichEmbed()
  .setTitle("Watchdog")
  .setDescription("**Punishment Type:** Ban")
  .setColor("#FF0000")
  .addField("Banned User", `<@${bUser.id}>`, true)
  .addField("Banned By", `<@${sender.id}>`, true)
  .addField("Banned In", message.channel, true)
  .addField("Time", message.createdAt, true)
  .addField("Reason", bReason, true)
  .setFooter(`User ID: ${bUser.id}`);

  let banchannel = message.guild.channels.find(`name`, "mod-log");
  if(!banchannel) return message.guild.create.channel(name, "mod-log");

  bUser.send(`You have been banned from ${message.guild.name} for: ${bReason}`).then(()=> {
    message.guild.member(bUser).ban(`${bReason}`);
    message.channel.send(`${bUser} has been banned!`).then(msg => msg.delete(5000));
  });


  banchannel.send(banEmbed);
  
 


}

module.exports.help = {
  name: "ban"
}
