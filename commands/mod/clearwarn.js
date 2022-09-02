const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /clearwarn")
  .setColor("#999999")
  .setDescription("**Description:** Removes a warning!\n**Usage:** /clearwarn [user]\n**Examples:**\n  /clearwarn @Nystrex");


  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(warns[wUser.id].warns <= 0) return message.channel.send("This user doesn't have any warns").then(msg => msg.delete(5000));
  let sender = message.author;

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns--;

  fs.writeFile("./warnings.json", JSON.stringify(warns, null, 4), (err) => {
    if(err) console.log(err);
  });

  message.channel.send(`Removed 1 warn from <@${wUser.id}>`);


}

module.exports.help = {
  name: "clearwarn"
}
