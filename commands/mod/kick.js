const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /kick")
  .setColor("#999999")
  .setDescription("**Description:** kicks the user!\n**Usage:** /kick [user] [reason]\n**Examples:**\n  /kick @DeathCookieOP Being Lazy");
  

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send(infoEmbed);
  if(!message.member.hasPermission("KICK_MEMBERS")) return;
  if(kUser.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't kick a member who is higher or has the same role as you!").then(msg => msg.delete(5000));
  let sender = message.author;



  let kickEmbed = new Discord.RichEmbed()
  .setTitle("Watchdog")
  .setDescription("**Punishment Type:** Kick")
  .setColor("#FF8800")
  .addField("Kicked User", `<@${kUser.id}>`, true)
  .addField("Kicked By", `<@${sender.id}>`, true)
  .addField("Kicked In", message.channel, true)
  .addField("Time", message.createdAt, true)
  .addField("Reason", kReason, true)
  .setFooter(`User ID: ${kUser.id}`);

  let kickchannel = message.guild.channels.find(`name`, "info");
  if(!kickchannel) return message.reply("Couldn't Find Required Channel!").then(msg => msg.delete(5000));


  kUser.send(`You have been kicked from TapL's Discord V2 for: ${kReason}`).then(()=> {
    message.guild.member(kUser).kick(`${kReason}`);
    message.channel.send(`${bUser} has been kicked!`).then(msg => msg.delete(5000));
  });

  kickchannel.send(kickEmbed);


}

module.exports.help = {
  name: "kick"
}