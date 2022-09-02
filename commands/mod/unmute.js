const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /unmute")
  .setColor("#999999")
  .setDescription("**Description:** Remove the mute from the player!\n**Usage:** /unmute [user]\n**Examples:**\n  /unmute @DeathCookieOP");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));

  if(user.id === message.author.id) return message.channel.send("You can't unmute yourself!");
  
  let mutedrole = message.guild.roles.find(r => r.name === "muted");


  user.removeRole(mutedrole.id);
  message.channel.send(`<@${user.id}> has been unmuted!`).then(msg => msg.delete(5000));
}

module.exports.help = {
  name: "unmute"
}