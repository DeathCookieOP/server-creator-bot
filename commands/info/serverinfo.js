
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
let day = message.guild.createdAt.getDate()
let month = 1 + message.guild.createdAt.getMonth()
let year = message.guild.createdAt.getFullYear()
let serverIcon = message.guild.iconURL;
let userIcon = message.author.avatarURL;
let serverEmbed = new Discord.RichEmbed()
.setTitle(`ℹ **${message.guild.name}**`, serverIcon)
.setFooter(`Server Created • ${month}.${day}.${year}`, userIcon)
.setColor("#7289DA")
.setThumbnail(serverIcon)
.addField("🔒 Owner", message.guild.owner.user.tag, true)
.addField("📌 Server ID", message.guild.id, true)
.addField("🌎 Region", message.guild.region, true)
.addField("👥 Members", message.guild.memberCount, true)
.addField("🔋 Online", online.size, true)
.addField("🕹 Roles", message.guild.roles.size, true);
message.channel.send(serverEmbed);

}

module.exports.help = {
  name: "serverinfo"
}
