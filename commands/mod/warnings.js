const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("**Usage:** /warnings {user}")
  let warnlevel = warns[wUser.id].warns;
  let reasons = warns[wUser.id].reason;

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warnings")
  .setColor("RANDOM")
  .addField("# of warnings", warnlevel)
  .addField("Reasons", "TEST");


  message.channel.send(warnEmbed)

}

module.exports.help = {
  name: "warnings"
}
