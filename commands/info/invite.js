const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let userIcon = message.author.avatarURL;
let inviteEmbed = new Discord.RichEmbed()
.setTitle(`Support Server`)
.setURL(`https://discord.gg/NXCJRad`)
.setColor("#7289DA")
.addField(`Click the blue message above to join our support discord.`, `You can invite the bot through there!`, true)
.setFooter(`Requested by ${message.author.tag}`, userIcon);

message.channel.send(inviteEmbed);

}

module.exports.help = {
  name: "invite",
   aliases: ['botinvite'],
}
