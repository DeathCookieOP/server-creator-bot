const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /clear")
  .setColor("#999999")
  .setDescription("**Description:** Clears Chat!\n**Usage:** /clear [number]\n**Examples:**\n  /clear 15");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(!args[0]) return message.channel.send(infoEmbed);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages!`).then(msg => msg.delete(3000))
  });

}

module.exports.help = {
  name: "clear"
}
