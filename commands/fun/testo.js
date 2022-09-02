const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let Making = new Discord.RichEmbed()
  .setTitle("Creating...")
  .setColor("#2200ff")
  .addField("Hold on, this won'shouldn't take long.");


  message.channel.send(Making)


}

module.exports.help = {
  name: "testo"
}
